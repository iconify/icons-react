import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zeojv2bql.css';
import '../../css/z/z3ys52bre.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/i/is_-82b8q.css';
import '../../css/f/f7t4iy9lb.css';
import '../../css/h/h7mhxehje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zeojv2bql"/><path class="wm-deco z3ys52bre"/><path class="cf3uzcrzx wm-deco"/><path class="is_-82b8q wm-k"/><path class="f7t4iy9lb wm-s"/><path class="h7mhxehje wm-s"/></g>`,
		"fallback": "withicons:phone-outgoing-blueprint",
	});
}

export default Component;
