import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/izzciiowm.css';
import '../../css/i/idy663b5a.css';
import '../../css/z/z54ep9b9t.css';
import '../../css/j/j8sz6hb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="izzciiowm"/><path class="idy663b5a wm-a"/><path class="z54ep9b9t"/><path class="j8sz6hb2h wm-a"/></g>`,
		"fallback": "withicons:spy-duo",
	});
}

export default Component;
