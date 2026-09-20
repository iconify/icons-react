import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xu48xmbrd.css';
import '../../css/j/jkp1ly-oa.css';
import '../../css/d/dw3utq_su.css';
import '../../css/t/t3mcul6ok.css';
import '../../css/l/lzgvjn04b.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xu48xmbrd"/><path class="jkp1ly-oa"/><path class="dw3utq_su"/><path class="t3mcul6ok"/><path class="lzgvjn04b"/></g>`,
		"fallback": "streamline-stickies-color:lab-tools-duo",
	});
}

export default Component;
