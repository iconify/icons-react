import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua9keqbpv.css';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e7pn7ylvm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGJjBfxcFL" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="ua9keqbpv"/></mask><g mask="url(#SVGJjBfxcFL)" class="nz_20wbpz"><path class="e7pn7ylvm"/></g>`,
		"fallback": "icon-park-solid:upload",
	});
}

export default Component;
