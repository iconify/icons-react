import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i8j-tqb2t.css';
import '../../css/i/izg8yvbkw.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/t/t81almqvm.css';
import '../../css/v/v4-vqmvnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="i8j-tqb2t wm-deco"/><path class="izg8yvbkw wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="t81almqvm wm-k"/><path class="v4-vqmvnf wm-a"/></g>`,
		"fallback": "withicons:timer-blueprint",
	});
}

export default Component;
