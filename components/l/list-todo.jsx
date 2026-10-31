import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mkattrbak.css';
import '../../css/l/lme95xbrc.css';
import '../../css/b/bjr92lbib.css';
import '../../css/h/h7y1736jv.css';
import '../../css/d/d6kthib0i.css';
import '../../css/u/up2fvlb9p.css';
import '../../css/h/hihcz8b2r.css';
import '../../css/y/yxlukjbou.css';
import '../../css/t/t7yk9rk5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mkattrbak wm-k"/><path class="lme95xbrc wm-a"/><path class="bjr92lbib wm-deco"/><path class="h7y1736jv wm-k"/><path class="d6kthib0i wm-a"/><path class="up2fvlb9p wm-shadow"/><path class="hihcz8b2r wm-shine"/><path class="wm-shine yxlukjbou"/><path class="t7yk9rk5l wm-shine"/></g>`,
		"fallback": "withicons-valentine:list-todo",
	});
}

export default Component;
