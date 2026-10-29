import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bt6g2bfub.css';
import '../../css/r/rd4yxbljb.css';
import '../../css/d/dsnrk86ar.css';
import '../../css/r/r85x9nj_w.css';
import '../../css/k/k0a7hrljc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bt6g2bfub wm-deco"/><path class="rd4yxbljb wm-deco"/><path class="dsnrk86ar wm-k"/><path class="r85x9nj_w wm-a"/><path class="k0a7hrljc wm-k"/></g>`,
		"fallback": "withicons:rainbow-blueprint",
	});
}

export default Component;
