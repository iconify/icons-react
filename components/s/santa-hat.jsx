import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fay72gbvh.css';
import '../../css/e/ef66r4bmf.css';
import '../../css/x/xu73cdcji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fay72gbvh"/><path class="ef66r4bmf"/><path class="wm-a xu73cdcji"/></g>`,
		"fallback": "withicons:santa-hat",
	});
}

export default Component;
