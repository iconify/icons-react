import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf6uy_bxw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf6uy_bxw"/>`,
		"fallback": "material-icon-theme:markdown",
	});
}

export default Component;
