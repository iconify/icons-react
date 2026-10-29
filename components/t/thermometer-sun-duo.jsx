import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d1dcdbblm.css';
import '../../css/f/f44jgxt3x.css';
import '../../css/t/thjectbkq.css';
import '../../css/i/ipkd9vbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d1dcdbblm"/><path class="f44jgxt3x wm-a"/><path class="thjectbkq wm-a"/><path class="ipkd9vbgw"/></g>`,
		"fallback": "withicons:thermometer-sun-duo",
	});
}

export default Component;
