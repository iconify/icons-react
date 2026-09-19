import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rsnxk8bsw.css';
import '../../css/m/mkvoqhbvr.css';
import '../../css/b/bk_g8t1yc.css';
import '../../css/t/tm1vapb3d.css';
import '../../css/w/wtpwdyb5k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rsnxk8bsw"/><path class="mkvoqhbvr"/><path class="bk_g8t1yc"/><path class="tm1vapb3d"/><path class="wtpwdyb5k"/></g>`,
		"fallback": "bi:qr-code-scan",
	});
}

export default Component;
