import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uok9l6b4m.css';
import '../../css/f/fwnfypblo.css';
import '../../css/k/ko78pjhzg.css';
import '../../css/m/m2undvcjg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="uok9l6b4m"/><path class="fwnfypblo"/><path class="ko78pjhzg"/><path class="m2undvcjg"/></g>`,
		"fallback": "streamline:lock-rotation",
	});
}

export default Component;
