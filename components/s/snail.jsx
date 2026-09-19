import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pu-1t1bjc.css';
import '../../css/d/dhqfjzgtu.css';
import '../../css/x/xekajxbvi.css';
import '../../css/c/c3qa00b_x.css';
import '../../css/r/r02hsj80l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pu-1t1bjc"/><path class="dhqfjzgtu"/><path class="xekajxbvi"/><path class="c3qa00b_x"/><path class="r02hsj80l"/></g>`,
		"fallback": "fluent-emoji-flat:snail",
	});
}

export default Component;
