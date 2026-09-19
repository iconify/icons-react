import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zihemk_6k.css';
import '../../css/w/w15g7ubbi.css';
import '../../css/y/ydlgzpbih.css';
import '../../css/g/gk8gx7whk.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/a/alyihb0gj.css';
import '../../css/w/wk_lp_wlk.css';
import '../../css/o/osi2yu8vz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGBgt2jgoN)" class="zihemk_6k"/><path fill="url(#SVGfhIOtbPc)" class="w15g7ubbi"/><path fill="url(#SVGpyan8cfW)" class="ydlgzpbih"/><defs><linearGradient id="SVGBgt2jgoN" x1="4.497" x2="13.972" y1="-.344" y2="18.914" gradientUnits="userSpaceOnUse"><stop class="gk8gx7whk"/><stop offset="1" class="h0zqot9pw"/></linearGradient><linearGradient id="SVGfhIOtbPc" x1="8" x2="11.603" y1="7" y2="14.686" gradientUnits="userSpaceOnUse"><stop class="alyihb0gj"/><stop offset="1" class="wk_lp_wlk"/></linearGradient><linearGradient id="SVGpyan8cfW" x1="8" x2="11.603" y1="7" y2="14.686" gradientUnits="userSpaceOnUse"><stop class="alyihb0gj"/><stop offset="1" class="osi2yu8vz"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:warning-20",
	});
}

export default Component;
