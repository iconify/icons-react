import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/uq_u8vbon.css';
import '../../css/t/t1bviy9_z.css';
import '../../css/l/l7jzesbrd.css';
import '../../css/w/wx6uobcjh.css';
import '../../css/y/yx4hybbhm.css';
import '../../css/j/j1w8b6n2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path clip-rule="evenodd" class="uq_u8vbon"/><path class="t1bviy9_z"/></g><g class="xtpeb-edw"><path class="l7jzesbrd"/><path class="wx6uobcjh"/></g><path class="yx4hybbhm"/><path class="j1w8b6n2v"/>`,
		"fallback": "solar:palette-bold-duotone",
	});
}

export default Component;
