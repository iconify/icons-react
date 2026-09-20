import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3qp_jb4v.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3qp_jb4v"/>`,
		"fallback": "system-uicons:moon",
	});
}

export default Component;
