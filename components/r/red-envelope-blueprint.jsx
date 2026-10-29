import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/q8jgfwb-b.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/m/mv85hfbyp.css';
import '../../css/p/p19yvk-0i.css';
import '../../css/p/p-5jg0y5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="q8jgfwb-b wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="mv85hfbyp wm-k"/><path class="p19yvk-0i wm-a"/><path class="p-5jg0y5a wm-s"/></g>`,
		"fallback": "withicons:red-envelope-blueprint",
	});
}

export default Component;
