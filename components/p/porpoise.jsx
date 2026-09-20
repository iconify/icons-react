import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgh1p_lqj.css';
import '../../css/p/pzk_h1vmg.css';
import '../../css/b/bq41_5b0n.css';
import '../../css/p/ps86piz4g.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/admk-sb9r.css';
import '../../css/s/s310zcckl.css';
import '../../css/n/nf9n6x72w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgh1p_lqj"/><path class="pzk_h1vmg"/><path class="bq41_5b0n"/><path class="ps86piz4g"/><g class="ij2x_72vy"><path class="admk-sb9r"/><path class="s310zcckl"/><path class="nf9n6x72w"/></g>`,
		"fallback": "openmoji:porpoise",
	});
}

export default Component;
