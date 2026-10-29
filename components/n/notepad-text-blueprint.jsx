import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/m6u5yxbxj.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/b/bhiae9bke.css';
import '../../css/f/fd6pd66bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="m6u5yxbxj wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="bhiae9bke wm-k"/><path class="fd6pd66bu wm-a"/></g>`,
		"fallback": "withicons:notepad-text-blueprint",
	});
}

export default Component;
