import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iqo65fb3s.css';
import '../../css/h/h4xiktb-f.css';
import '../../css/j/jgwm0beal.css';
import '../../css/h/hsgg6j0lp.css';
import '../../css/m/m3mfq9x2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="iqo65fb3s"/><path class="h4xiktb-f wm-s"/><path class="jgwm0beal wm-s"/><path class="hsgg6j0lp"/><path class="m3mfq9x2i wm-a"/></g>`,
		"fallback": "withicons:sparkler-duo",
	});
}

export default Component;
