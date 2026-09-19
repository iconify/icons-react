import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hsol5p2kz.css';
import '../../css/j/jy-0clbhq.css';
import '../../css/v/vlv50fa1h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hsol5p2kz"/><path class="jy-0clbhq"/><path class="vlv50fa1h"/></g>`,
		"fallback": "pepicons:stars",
	});
}

export default Component;
