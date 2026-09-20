import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hyfz3pbvw.css';
import '../../css/j/jnxw8w4vf.css';
import '../../css/j/j_bgm8k5t.css';
import '../../css/i/irzri8s_s.css';
import '../../css/z/zkyjh5bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hyfz3pbvw"/><path class="jnxw8w4vf"/><path class="j_bgm8k5t"/><path class="irzri8s_s"/><path class="zkyjh5bzp"/></g>`,
		"fallback": "solar:star-off-broken",
	});
}

export default Component;
