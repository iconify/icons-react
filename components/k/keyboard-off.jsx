import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joxwt1bet.css';
import '../../css/k/kdd-004ir.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joxwt1bet"/><path class="kdd-004ir"/>`,
		"fallback": "carbon:keyboard-off",
	});
}

export default Component;
