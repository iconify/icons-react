import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/prwmzh75z.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/l/l7ckfcc9c.css';
import '../../css/i/iqyqpg9id.css';
import '../../css/s/s53tgbb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="prwmzh75z wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="l7ckfcc9c wm-k"/><path class="iqyqpg9id wm-k"/><path class="s53tgbb5w wm-a"/></g>`,
		"fallback": "withicons:split-blueprint",
	});
}

export default Component;
