import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mmco1-hig.css';
import '../../css/f/fai59idpe.css';
import '../../css/w/wofxy3bdj.css';
import '../../css/y/yefoqdcpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="mmco1-hig wm-shadow"/><path class="fai59idpe wm-shadow"/><path class="wofxy3bdj"/><path class="yefoqdcpc"/></g>`,
		"fallback": "withicons-brutal:ticket",
	});
}

export default Component;
