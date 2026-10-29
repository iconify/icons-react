import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r3n5yaczg.css';
import '../../css/j/j3_h7f7oi.css';
import '../../css/t/ty867pbrf.css';
import '../../css/p/pstgohcda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r3n5yaczg"/><path class="j3_h7f7oi"/><path class="ty867pbrf"/><path class="pstgohcda wm-a"/></g>`,
		"fallback": "withicons:turtle",
	});
}

export default Component;
