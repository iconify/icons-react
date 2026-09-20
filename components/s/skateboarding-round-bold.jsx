import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y12majbve.css';
import '../../css/t/t8dgl9b5t.css';
import '../../css/q/q96rhebcu.css';
import '../../css/o/o0pfhwbdc.css';
import '../../css/o/o6ex67b9j.css';
import '../../css/y/y40r00bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y12majbve"/><path clip-rule="evenodd" class="t8dgl9b5t"/><path class="q96rhebcu"/><path class="o0pfhwbdc"/><path class="o6ex67b9j"/><path class="y40r00bvy"/></g>`,
		"fallback": "solar:skateboarding-round-bold",
	});
}

export default Component;
