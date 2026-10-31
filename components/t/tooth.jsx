import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j3_p5ob9u.css';
import '../../css/c/ctm_03bzn.css';
import '../../css/d/d57wxtbqb.css';
import '../../css/l/lmbj9cumj.css';
import '../../css/a/apl1-gbpk.css';
import '../../css/m/mmlsgacws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="j3_p5ob9u wm-shadow"/><path class="ctm_03bzn"/><path class="d57wxtbqb"/><path class="lmbj9cumj"/><path class="apl1-gbpk"/><path class="mmlsgacws"/></g>`,
		"fallback": "withicons-retro:tooth",
	});
}

export default Component;
