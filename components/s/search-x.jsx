import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lji_-4zcb.css';
import '../../css/m/m2n4j8blj.css';
import '../../css/y/ya4x_5u0n.css';
import '../../css/q/q-40t5bys.css';
import '../../css/o/ob056tb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lji_-4zcb wm-shadow"/><path class="m2n4j8blj"/><path class="ya4x_5u0n"/><path class="q-40t5bys"/><path class="ob056tb5t"/></g>`,
		"fallback": "withicons-retro:search-x",
	});
}

export default Component;
