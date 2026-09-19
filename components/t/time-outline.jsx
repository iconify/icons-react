import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-tflgzje.css';
import '../../css/i/ik34--bau.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-tflgzje"/><path class="ik34--bau"/>`,
		"fallback": "ion:time-outline",
	});
}

export default Component;
