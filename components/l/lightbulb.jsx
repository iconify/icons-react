import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/isnqgyblz.css';
import '../../css/t/te_whkbxy.css';
import '../../css/e/ewj4osbyb.css';
import '../../css/r/r235_rbxk.css';
import '../../css/n/nn0_b0bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="isnqgyblz wm-shadow"/><path class="te_whkbxy wm-shadow"/><path class="ewj4osbyb"/><path class="r235_rbxk"/><path class="nn0_b0bly"/></g>`,
		"fallback": "withicons-brutal:lightbulb",
	});
}

export default Component;
