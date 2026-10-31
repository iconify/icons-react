import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e_n_dpvqf.css';
import '../../css/f/fepdi6yen.css';
import '../../css/g/gbyoe41vz.css';
import '../../css/m/mvfp-2b_y.css';
import '../../css/g/gq-w5hb-o.css';
import '../../css/k/kr6p3ub9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e_n_dpvqf wm-shadow"/><path class="fepdi6yen"/><path class="gbyoe41vz"/><path class="mvfp-2b_y"/><path class="gq-w5hb-o"/><path class="kr6p3ub9w"/></g>`,
		"fallback": "withicons-retro:ruler",
	});
}

export default Component;
