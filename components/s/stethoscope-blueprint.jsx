import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ih5ozlbgy.css';
import '../../css/t/tmvc5lbma.css';
import '../../css/c/co407c62o.css';
import '../../css/i/i7g8jgxjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ih5ozlbgy wm-deco"/><path class="tmvc5lbma wm-deco"/><path class="co407c62o wm-deco"/><path class="i7g8jgxjp"/></g>`,
		"fallback": "withicons:stethoscope-blueprint",
	});
}

export default Component;
