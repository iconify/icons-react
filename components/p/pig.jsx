import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_omhjbau.css';
import '../../css/k/k1m51n3mc.css';
import '../../css/e/eqdu0i6_m.css';
import '../../css/j/j4-1v7byq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_omhjbau"/><path class="k1m51n3mc"/><path class="eqdu0i6_m"/><path class="j4-1v7byq"/></g>`,
		"fallback": "fluent-emoji-flat:pig",
	});
}

export default Component;
