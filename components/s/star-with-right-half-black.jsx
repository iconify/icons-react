import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5zapxbrz.css';
import '../../css/v/v1tc8gbmm.css';
import '../../css/v/vxvdrdbbi.css';
import '../../css/z/z04drlb1l.css';
import '../../css/o/o5_eq6e0u.css';
import '../../css/e/e2opw73ez.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5zapxbrz"/><path class="v1tc8gbmm"/><path class="vxvdrdbbi"/><g class="z04drlb1l"><path class="o5_eq6e0u"/><path class="e2opw73ez"/></g>`,
		"fallback": "openmoji:star-with-right-half-black",
	});
}

export default Component;
