import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/m/m16-b9bsy.css';
import '../../css/o/oalkwfcig.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="m16-b9bsy"/><path class="oalkwfcig"/></g>`,
		"fallback": "streamline-stickies-color:programming-duo",
	});
}

export default Component;
