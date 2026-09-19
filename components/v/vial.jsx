import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/th2a0ccjf.css';
import '../../css/x/x0xh1wb0s.css';
import '../../css/y/yqc7myppr.css';
import '../../css/i/i74efuaoj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="th2a0ccjf"/><path class="x0xh1wb0s"/><path class="yqc7myppr"/><path class="i74efuaoj"/></g>`,
		"fallback": "icon-park:vial",
	});
}

export default Component;
