import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zltitfpfl.css';
import '../../css/b/bsbg6bbwt.css';
import '../../css/m/mj164lbcq.css';
import '../../css/b/bvmvrfbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zltitfpfl"/><path class="bsbg6bbwt"/><path class="mj164lbcq"/><path class="bvmvrfbtb"/></g>`,
		"fallback": "withicons-retro:shovel",
	});
}

export default Component;
