import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz3yzsstx.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz3yzsstx"/>`,
		"fallback": "wi:owm-day-231",
	});
}

export default Component;
