import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vts8luguz.css';
import '../../css/b/bdh_yppki.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/ackqa5buo.css';
import '../../css/d/dp7bcv98s.css';
import '../../css/d/do6_9wb2v.css';
import '../../css/z/zpl_vi3hi.css';
import '../../css/g/gwkk53bye.css';
import '../../css/m/mp3vtlqfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGITMnofyN" x1="4.5" x2="12.75" y1="1" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset=".3" class="vts8luguz"/><stop offset="1" class="bdh_yppki"/></linearGradient><linearGradient id="SVGgfDdCblV" x1="0" x2="0" y1=".47" y2="11.7" gradientUnits="userSpaceOnUse"><stop offset=".25" class="vc--wpv5i"/><stop offset="1" class="ackqa5buo"/></linearGradient></defs><path class="dp7bcv98s"/><path fill="url(#SVGITMnofyN)" class="do6_9wb2v wm-shine"/><path class="wm-deco zpl_vi3hi"/><path fill="url(#SVGgfDdCblV)" class="gwkk53bye wm-deco"/><path class="mp3vtlqfi wm-deco"/></g>`,
		"fallback": "withicons-christmas:person-standing",
	});
}

export default Component;
