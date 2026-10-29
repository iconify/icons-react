import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yhaiccbkb.css';
import '../../css/g/g2xclxbug.css';
import '../../css/j/jkj5y8biz.css';
import '../../css/y/yc5-7oenb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yhaiccbkb"/><path class="g2xclxbug wm-deco"/><path class="jkj5y8biz wm-k"/><path class="wm-a yc5-7oenb"/></g>`,
		"fallback": "withicons:terminal-blueprint",
	});
}

export default Component;
