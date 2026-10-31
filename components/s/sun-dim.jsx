import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xw6_78bab.css';
import '../../css/t/tkha_o8sv.css';
import '../../css/e/e9npa2yyf.css';
import '../../css/w/wy8-2ybbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xw6_78bab"/><path class="tkha_o8sv"/><path class="e9npa2yyf"/><path class="wy8-2ybbt"/></g>`,
		"fallback": "withicons-retro:sun-dim",
	});
}

export default Component;
