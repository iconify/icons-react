import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y12majbve.css';
import '../../css/t/t8dgl9b5t.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/rkxs0hbwj.css';
import '../../css/o/o0pfhwbdc.css';
import '../../css/o/o6ex67b9j.css';
import '../../css/o/op7hs8ybg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y12majbve"/><path clip-rule="evenodd" class="t8dgl9b5t"/><g class="mc2zb0bvp"><path class="rkxs0hbwj"/><path class="o0pfhwbdc"/><path class="o6ex67b9j"/><path class="op7hs8ybg"/></g></g>`,
		"fallback": "solar:skateboarding-round-bold-duotone",
	});
}

export default Component;
