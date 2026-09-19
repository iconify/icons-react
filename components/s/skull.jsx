import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0c2y_bmk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0c2y_bmk"/>`,
		"fallback": "fa7-solid:skull",
	});
}

export default Component;
