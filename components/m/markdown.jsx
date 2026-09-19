import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3al6s0ue.css';
import '../../css/d/dys46yl0s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3al6s0ue"/><path class="dys46yl0s"/>`,
		"fallback": "devicon:markdown",
	});
}

export default Component;
