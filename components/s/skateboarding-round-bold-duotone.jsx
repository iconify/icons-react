import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb7lpq_wf.css';
import '../../css/q/qgr7uybef.css';
import '../../css/x/xtpeb-edw.css';
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
		"content": `<path class="jb7lpq_wf"/><path clip-rule="evenodd" class="qgr7uybef"/><g class="xtpeb-edw"><path class="rkxs0hbwj"/><path class="o0pfhwbdc"/><path class="o6ex67b9j"/><path class="op7hs8ybg"/></g>`,
		"fallback": "solar:skateboarding-round-bold-duotone",
	});
}

export default Component;
