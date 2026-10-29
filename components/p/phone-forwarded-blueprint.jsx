import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xn0s-1bpj.css';
import '../../css/z/z3ys52bre.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/i/is_-82b8q.css';
import '../../css/l/lr5buhsid.css';
import '../../css/q/qmkn-1b4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xn0s-1bpj"/><path class="wm-deco z3ys52bre"/><path class="cf3uzcrzx wm-deco"/><path class="is_-82b8q wm-k"/><path class="lr5buhsid wm-s"/><path class="qmkn-1b4g wm-s"/></g>`,
		"fallback": "withicons:phone-forwarded-blueprint",
	});
}

export default Component;
