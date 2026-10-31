import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjdle_l-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjdle_l-d"/>`,
		"fallback": "coolicons:running-round",
	});
}

export default Component;
