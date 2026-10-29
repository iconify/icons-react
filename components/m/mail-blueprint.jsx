import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lchfyipkg.css';
import '../../css/l/l00otmbzz.css';
import '../../css/c/cp6jlib5e.css';
import '../../css/w/wqb-0n4qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lchfyipkg wm-deco"/><path class="l00otmbzz wm-deco"/><path class="cp6jlib5e wm-k"/><path class="wm-a wqb-0n4qk"/></g>`,
		"fallback": "withicons:mail-blueprint",
	});
}

export default Component;
