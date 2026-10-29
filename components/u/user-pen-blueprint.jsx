import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/plbqw9bvk.css';
import '../../css/s/svg61sbbd.css';
import '../../css/z/zqrr0f2ra.css';
import '../../css/g/gr51g0biu.css';
import '../../css/o/oh37a5f2v.css';
import '../../css/c/c6mo7m0bg.css';
import '../../css/a/ayf8ztfis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="plbqw9bvk wm-deco"/><path class="svg61sbbd wm-deco"/><path class="wm-deco zqrr0f2ra"/><path class="gr51g0biu wm-k"/><path class="oh37a5f2v wm-s"/><path class="c6mo7m0bg wm-k"/><path class="ayf8ztfis wm-s"/></g>`,
		"fallback": "withicons:user-pen-blueprint",
	});
}

export default Component;
