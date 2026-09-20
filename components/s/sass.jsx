import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gi7bas88e.css';
import '../../css/d/d-s91m4nw.css';
import '../../css/r/rj4k8tb_e.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="gi7bas88e"/><g clip-path="url(#SVG2V0vHQRw)"><path class="d-s91m4nw"/></g><defs><clipPath id="SVG2V0vHQRw"><path class="rj4k8tb_e"/></clipPath></defs></g>`,
		"fallback": "skill-icons:sass",
	});
}

export default Component;
