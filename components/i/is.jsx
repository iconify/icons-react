import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kcgjvo2om.css';
import '../../css/z/zi4xujzbs.css';
import '../../css/b/bfohs7bca.css';

const viewBox = {"width":301,"height":217};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kcgjvo2om"/><path class="zi4xujzbs"/><path class="bfohs7bca"/></g>`,
		"fallback": "cif:is",
	});
}

export default Component;
