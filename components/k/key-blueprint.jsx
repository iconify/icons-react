import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/ysznytbju.css';
import '../../css/c/c6vs_ccxk.css';
import '../../css/p/pbtr10c0j.css';
import '../../css/l/l2ogbdbpz.css';
import '../../css/w/w5jtgj_4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco ysznytbju"/><path class="c6vs_ccxk wm-deco"/><path class="pbtr10c0j wm-deco"/><path class="l2ogbdbpz wm-k"/><path class="w5jtgj_4y wm-k"/></g>`,
		"fallback": "withicons:key-blueprint",
	});
}

export default Component;
