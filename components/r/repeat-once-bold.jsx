import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r4l7ckptj.css';
import '../../css/m/mg6_t5b9m.css';
import '../../css/v/vv-z5phem.css';
import '../../css/k/k8owyt_1k.css';
import '../../css/c/cbbomjbhn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r4l7ckptj"/><path class="mg6_t5b9m"/><path class="vv-z5phem"/><path class="k8owyt_1k"/><path class="cbbomjbhn"/></g>`,
		"fallback": "glyphs:repeat-once-bold",
	});
}

export default Component;
