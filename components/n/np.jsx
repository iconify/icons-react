import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rp16bptoo.css';
import '../../css/h/hnr66_7bz.css';
import '../../css/r/rmoq3hryj.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m-ghagbus.css';
import '../../css/c/cz4naac2v.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rp16bptoo"/><path class="hnr66_7bz"/><mask id="SVGgouMdeFX" width="22" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="rmoq3hryj"/></mask><g clip-rule="evenodd" mask="url(#SVGgouMdeFX)" class="d2kvgvbvc"><path class="m-ghagbus"/><path class="cz4naac2v"/></g></g>`,
		"fallback": "flagpack:np",
	});
}

export default Component;
