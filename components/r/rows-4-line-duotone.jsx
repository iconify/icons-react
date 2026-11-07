import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/al79j7shr.css';
import '../../css/a/a1urgwbsh.css';
import '../../css/x/xpawh__yk.css';
import '../../css/c/cex3mhxbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="al79j7shr"/><path class="a1urgwbsh"/><path class="xpawh__yk"/><path class="cex3mhxbq"/></g>`,
		"fallback": "solar:rows-4-line-duotone",
	});
}

export default Component;
