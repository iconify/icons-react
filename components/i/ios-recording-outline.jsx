import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh9mglbwk.css';
import '../../css/m/mdt1zbc6x.css';
import '../../css/h/hnvcyqpyt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh9mglbwk"/><path class="mdt1zbc6x"/><path class="hnvcyqpyt"/>`,
		"fallback": "ion:ios-recording-outline",
	});
}

export default Component;
