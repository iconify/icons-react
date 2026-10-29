import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rct529mqu.css';
import '../../css/h/hqz31-bnt.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/o/oh4f1hbmh.css';
import '../../css/z/zpu53zwhs.css';
import '../../css/b/bochahbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rct529mqu wm-deco"/><path class="hqz31-bnt wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="oh4f1hbmh wm-k"/><path class="wm-a zpu53zwhs"/><path class="bochahbmj wm-k"/></g>`,
		"fallback": "withicons:scan-face-blueprint",
	});
}

export default Component;
