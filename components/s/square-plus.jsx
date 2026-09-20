import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va41csvvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va41csvvp"/>`,
		"fallback": "tabler:square-plus",
	});
}

export default Component;
