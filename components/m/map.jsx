import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vts8luguz.css';
import '../../css/b/bdh_yppki.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/ackqa5buo.css';
import '../../css/a/a7rxxabbt.css';
import '../../css/p/p-afnzanm.css';
import '../../css/f/fimv0vb6h.css';
import '../../css/b/bs0e63biv.css';
import '../../css/h/h5shjyt0q.css';
import '../../css/v/vzonpt-6r.css';
import '../../css/j/jcr_e7bck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGtfUMGccB" x1="2" x2="13" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset=".3" class="vts8luguz"/><stop offset="1" class="bdh_yppki"/></linearGradient><linearGradient id="SVGELxvidlf" x1="0" x2="0" y1="1.12" y2="6.25" gradientUnits="userSpaceOnUse"><stop offset=".25" class="vc--wpv5i"/><stop offset="1" class="ackqa5buo"/></linearGradient></defs><path class="a7rxxabbt"/><path fill="url(#SVGtfUMGccB)" class="p-afnzanm wm-shine"/><path class="fimv0vb6h wm-deco"/><path fill="url(#SVGELxvidlf)" class="bs0e63biv wm-deco"/><path class="h5shjyt0q wm-deco"/><path class="vzonpt-6r wm-deco"/><path class="jcr_e7bck wm-deco"/></g>`,
		"fallback": "withicons-christmas:map",
	});
}

export default Component;
