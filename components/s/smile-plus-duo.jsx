import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r3q-l6bmy.css';
import '../../css/z/z4fg99pfy.css';
import '../../css/p/pxcylebuj.css';
import '../../css/s/sl7siidbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r3q-l6bmy"/><path class="wm-s z4fg99pfy"/><path class="pxcylebuj"/><path class="sl7siidbt wm-a"/></g>`,
		"fallback": "withicons:smile-plus-duo",
	});
}

export default Component;
