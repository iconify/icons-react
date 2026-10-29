import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ab3ysvbhr.css';
import '../../css/j/jein5vgbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ab3ysvbhr"/><path class="jein5vgbr wm-a"/></g>`,
		"fallback": "withicons:syringe",
	});
}

export default Component;
