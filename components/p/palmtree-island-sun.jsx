import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wxgs__din.css';
import '../../css/j/jiep1lb5u.css';
import '../../css/z/zr_dy193o.css';
import '../../css/j/j3c5cyc6n.css';
import '../../css/o/oh4q5bctl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="wxgs__din"/><path class="jiep1lb5u"/><path class="zr_dy193o"/><path class="j3c5cyc6n"/><path class="oh4q5bctl"/></g>`,
		"fallback": "lucide-lab:palmtree-island-sun",
	});
}

export default Component;
