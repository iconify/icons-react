import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvl2anbys.css';
import '../../css/v/vagq61bug.css';
import '../../css/r/rj2_rc7to.css';
import '../../css/w/wa9awwb1r.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="pvl2anbys"/><path clip-rule="evenodd" class="vagq61bug"/><path clip-rule="evenodd" class="rj2_rc7to"/><path clip-rule="evenodd" class="wa9awwb1r"/></g>`,
		"fallback": "skill-icons:threejs-light",
	});
}

export default Component;
