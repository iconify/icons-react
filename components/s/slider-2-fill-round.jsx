import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r093a8ojm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r093a8ojm"/>`,
		"fallback": "coolicons:slider-2-fill-round",
	});
}

export default Component;
