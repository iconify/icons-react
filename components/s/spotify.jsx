import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzx9n_blw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzx9n_blw"/>`,
		"fallback": "cib:spotify",
	});
}

export default Component;
