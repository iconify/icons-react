import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m888r_bry.css';
import '../../css/j/jaea4fb8w.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="m888r_bry"/><path class="jaea4fb8w"/></g>`,
		"fallback": "skill-icons:perl",
	});
}

export default Component;
