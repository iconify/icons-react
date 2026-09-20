import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upg_mvemj.css';
import '../../css/s/sfy5rz71v.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vt2oo7o4z.css';
import '../../css/v/vdjc6_bwc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="upg_mvemj"/><path class="sfy5rz71v"/><g class="jn8qy4bru"><path class="vt2oo7o4z"/><path class="vdjc6_bwc"/></g>`,
		"fallback": "openmoji:mark",
	});
}

export default Component;
