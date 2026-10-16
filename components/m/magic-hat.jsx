import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mcavfmget.css';
import '../../css/j/j2_0o_bfm.css';
import '../../css/t/txzg8cc3a.css';
import '../../css/y/yhe0alb_e.css';
import '../../css/z/z-z0-kbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mcavfmget"/><path class="j2_0o_bfm"/><ellipse transform="rotate(90 12 13.08)" class="txzg8cc3a"/><path class="yhe0alb_e"/><path class="z-z0-kbtb"/></g>`,
		"fallback": "andrsrxn:magic-hat",
	});
}

export default Component;
