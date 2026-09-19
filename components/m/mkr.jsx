import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yc3f0k07y.css';
import '../../css/l/l6eqv7b9l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="yc3f0k07y"/><path class="l6eqv7b9l"/></g>`,
		"fallback": "cryptocurrency-color:mkr",
	});
}

export default Component;
