import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_g8s2ell.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_g8s2ell"/>`,
		"fallback": "devicon:systemverilog",
	});
}

export default Component;
