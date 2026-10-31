import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k6h017b2p.css';
import '../../css/t/tnigif0da.css';
import '../../css/e/el_5jhvci.css';
import '../../css/u/u-km2mbci.css';
import '../../css/d/d3q7jdtbg.css';
import '../../css/j/jax46vbno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k6h017b2p wm-shadow"/><path class="tnigif0da"/><path class="el_5jhvci"/><path class="u-km2mbci"/><path class="d3q7jdtbg"/><path class="jax46vbno"/></g>`,
		"fallback": "withicons-retro:panel-left-open",
	});
}

export default Component;
