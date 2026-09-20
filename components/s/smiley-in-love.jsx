import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z58c34bia.css';
import '../../css/u/ub1bbobtx.css';
import '../../css/m/mj9wjjb6i.css';
import '../../css/l/li-ok04-v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z58c34bia"/><path class="ub1bbobtx"/><path class="mj9wjjb6i"/><path class="li-ok04-v"/></g>`,
		"fallback": "streamline-color:smiley-in-love",
	});
}

export default Component;
