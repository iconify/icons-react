import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx9lulxcv.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx9lulxcv"/>`,
		"fallback": "wi:time-4",
	});
}

export default Component;
