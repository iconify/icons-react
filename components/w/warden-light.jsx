import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozfmrnbpf.css';
import '../../css/z/zu6ek4h1t.css';
import '../../css/r/rgbhf6bcm.css';

const viewBox = {"width":64,"height":77};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ozfmrnbpf"><path class="zu6ek4h1t"/><path class="rgbhf6bcm"/></g>`,
		"fallback": "thesvg-color:warden-light",
	});
}

export default Component;
