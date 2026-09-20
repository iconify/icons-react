import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr-bpbgly.css';
import '../../css/n/nswt9dxqv.css';
import '../../css/k/kvwx-47iv.css';
import '../../css/s/slhhf6z5k.css';
import '../../css/l/l0jbyu70v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr-bpbgly"/><path class="nswt9dxqv"/><path class="kvwx-47iv"/><path class="slhhf6z5k"/><path class="l0jbyu70v"/>`,
		"fallback": "streamline-pixel:music-radio-stereo",
	});
}

export default Component;
