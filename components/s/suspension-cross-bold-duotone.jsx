import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucym07b5n.css';
import '../../css/h/hpp6ujt5x.css';
import '../../css/g/gh2z3q1ep.css';
import '../../css/c/cfu0w31nz.css';
import '../../css/k/kuukv2b8k.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/fo90bw6sy.css';
import '../../css/q/qqfkmr2-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucym07b5n"/><path class="hpp6ujt5x"/><path class="gh2z3q1ep"/><path class="cfu0w31nz"/><path class="kuukv2b8k"/><g class="xtpeb-edw"><path class="fo90bw6sy"/><path class="qqfkmr2-y"/></g>`,
		"fallback": "solar:suspension-cross-bold-duotone",
	});
}

export default Component;
