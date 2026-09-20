import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul8462u1n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul8462u1n"/>`,
		"fallback": "material-icon-theme:stencil",
	});
}

export default Component;
