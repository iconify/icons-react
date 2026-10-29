import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lwy59cd4v.css';
import '../../css/i/i4vp2vc3r.css';
import '../../css/q/qmauy_88m.css';
import '../../css/s/sx5y0mhtr.css';
import '../../css/b/bc698pr8y.css';
import '../../css/y/ysyoadbac.css';
import '../../css/z/zdef0qb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lwy59cd4v wm-deco"/><path class="i4vp2vc3r wm-deco"/><path class="qmauy_88m wm-deco"/><path class="sx5y0mhtr wm-k"/><path class="bc698pr8y wm-a"/><path class="wm-k ysyoadbac"/><path class="wm-a zdef0qb0z"/></g>`,
		"fallback": "withicons:sleigh-blueprint",
	});
}

export default Component;
