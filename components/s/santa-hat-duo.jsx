import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z-dtby3xj.css';
import '../../css/j/j95cjpbyr.css';
import '../../css/x/xu73cdcji.css';
import '../../css/f/fay72gbvh.css';
import '../../css/e/ef66r4bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z-dtby3xj"/><path class="j95cjpbyr wm-a"/><path class="wm-a xu73cdcji"/><path class="fay72gbvh"/><path class="ef66r4bmf"/></g>`,
		"fallback": "withicons:santa-hat-duo",
	});
}

export default Component;
