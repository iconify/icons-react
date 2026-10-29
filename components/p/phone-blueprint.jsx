import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/u7yshsrnj.css';
import '../../css/z/z3ys52bre.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/i/is_-82b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="u7yshsrnj wm-deco"/><path class="wm-deco z3ys52bre"/><path class="cf3uzcrzx wm-deco"/><path class="is_-82b8q"/></g>`,
		"fallback": "withicons:phone-blueprint",
	});
}

export default Component;
