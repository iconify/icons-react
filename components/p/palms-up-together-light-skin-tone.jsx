import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zym40bb_i.css';
import '../../css/e/emb3y_wrs.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/u9ce-33wr.css';
import '../../css/h/h0--35b1u.css';
import '../../css/x/x9odmzbsk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zym40bb_i"/><path class="emb3y_wrs"/><g class="ij2x_72vy"><path class="u9ce-33wr"/><path class="h0--35b1u"/><path class="x9odmzbsk"/></g>`,
		"fallback": "openmoji:palms-up-together-light-skin-tone",
	});
}

export default Component;
