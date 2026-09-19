import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zol77mb3h.css';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eb74qu_lk.css';
import '../../css/a/acm4xu9sj.css';
import '../../css/p/p1a0zztoq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGHdefabht" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="zol77mb3h"/></mask><g mask="url(#SVGHdefabht)" class="rggfaqb6e"><path class="eb74qu_lk"/><path class="acm4xu9sj"/><path class="p1a0zztoq"/></g>`,
		"fallback": "icon-park:upload",
	});
}

export default Component;
