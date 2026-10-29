import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p_x692bkb.css';
import '../../css/u/ukjvipc-p.css';
import '../../css/c/c9cbk6ccl.css';
import '../../css/i/i6-8ex8oz.css';
import '../../css/t/tww99ib1d.css';
import '../../css/y/yzogqdh4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p_x692bkb wm-deco"/><path class="ukjvipc-p wm-deco"/><path class="c9cbk6ccl wm-k"/><path class="i6-8ex8oz wm-a"/><path class="tww99ib1d wm-k"/><path class="wm-a yzogqdh4l"/></g>`,
		"fallback": "withicons:sort-alpha-blueprint",
	});
}

export default Component;
