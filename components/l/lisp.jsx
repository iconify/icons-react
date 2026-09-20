import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp_2e5bqp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp_2e5bqp"/>`,
		"fallback": "material-icon-theme:lisp",
	});
}

export default Component;
