import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byim4mbdb.css';
import '../../css/y/ycvrf5bhm.css';
import '../../css/f/fzxqcabnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byim4mbdb"/><g transform="translate(2 8)"><defs><filter id="SVGuOxxVbPy" width="24" height="24" x="-2" y="-7" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask id="SVGlonEL5NS" width="24" height="24" x="-2" y="-7" maskUnits="userSpaceOnUse"><g filter="url(#SVGuOxxVbPy)"><path clip-rule="evenodd" class="ycvrf5bhm"/></g></mask><path clip-rule="evenodd" mask="url(#SVGlonEL5NS)" class="fzxqcabnv"/></g>`,
		"fallback": "gcp:my-cloud",
	});
}

export default Component;
