import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hfpzo8bzp.css';
import '../../css/n/n8cg1nb1q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hfpzo8bzp"/><path class="n8cg1nb1q"/></g>`,
		"fallback": "material-icon-theme:velite",
	});
}

export default Component;
