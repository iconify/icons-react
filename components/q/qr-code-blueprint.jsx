import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x3sw__bck.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/w/wjqrikxcn.css';
import '../../css/f/f98ia0txa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco x3sw__bck"/><path class="cf3uzcrzx wm-deco"/><path class="wjqrikxcn wm-k"/><path class="f98ia0txa wm-a"/></g>`,
		"fallback": "withicons:qr-code-blueprint",
	});
}

export default Component;
