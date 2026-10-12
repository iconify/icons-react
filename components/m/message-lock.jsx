import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4tuvbc7p.css';
import '../../css/g/gg7g5d0ya.css';
import '../../css/t/tvj2qjp7a.css';
import '../../css/w/wgqcdlbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n4tuvbc7p"/><path class="gg7g5d0ya"/><rect class="tvj2qjp7a"/><path class="wgqcdlbkv"/></g>`,
		"fallback": "andrsrxn:message-lock",
	});
}

export default Component;
