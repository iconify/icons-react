import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbegeubyk.css';
import '../../css/s/sc871acwu.css';
import '../../css/x/xskigzbsf.css';
import '../../css/c/cmw57vbln.css';
import '../../css/c/clztutb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hbegeubyk"/><path class="sc871acwu"/><path class="xskigzbsf"/><path class="cmw57vbln"/><path class="clztutb9g"/></g>`,
		"fallback": "streamline-ultimate-color:programming-hold-code-2",
	});
}

export default Component;
