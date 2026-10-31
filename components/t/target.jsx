import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t58iwdbnr.css';
import '../../css/c/clgy2ivjb.css';
import '../../css/f/fu26y-b5x.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/s/saj-w1fxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="t58iwdbnr"/><path class="clgy2ivjb"/><path class="fu26y-b5x wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="saj-w1fxq wm-a"/></g>`,
		"fallback": "withicons-kawaii:target",
	});
}

export default Component;
