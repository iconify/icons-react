import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zmpt-n0vw.css';
import '../../css/j/jsdlfwlyf.css';
import '../../css/f/ff-dn6bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="zmpt-n0vw"/><path clip-rule="evenodd" class="jsdlfwlyf"/><path class="ff-dn6bic"/></g>`,
		"fallback": "lets-icons:user-add-light",
	});
}

export default Component;
