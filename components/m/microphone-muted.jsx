import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/y/yp1_0nhpl.css';
import '../../css/n/n6xln4bqy.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="yp1_0nhpl"/><path class="n6xln4bqy"/></g>`,
		"fallback": "system-uicons:microphone-muted",
	});
}

export default Component;
