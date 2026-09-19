import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2cg_xv5h.css';
import '../../css/g/g-_3ltj-p.css';
import '../../css/e/efspjbcxr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j2cg_xv5h"/><path class="g-_3ltj-p"/><circle class="efspjbcxr"/></g>`,
		"fallback": "icon-park:nail-polish",
	});
}

export default Component;
