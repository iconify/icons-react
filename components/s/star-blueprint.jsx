import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xj-07jblj.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/a/auu9f3q7e.css';
import '../../css/k/khyi2fb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xj-07jblj"/><path class="o7-ag87sb wm-deco"/><path class="auu9f3q7e wm-deco"/><path class="khyi2fb7x"/></g>`,
		"fallback": "withicons:star-blueprint",
	});
}

export default Component;
