import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc9zr_r5s.css';
import '../../css/d/d3xjujk0y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc9zr_r5s"/><path class="d3xjujk0y"/>`,
		"fallback": "thesvg-color:libgdx",
	});
}

export default Component;
