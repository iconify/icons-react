import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/piq9adp7d.css';
import '../../css/z/zh22fdwmm.css';
import '../../css/b/b8oitndok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="piq9adp7d"/><path class="zh22fdwmm"/><path class="b8oitndok"/></g>`,
		"fallback": "iconoir:printing-page",
	});
}

export default Component;
