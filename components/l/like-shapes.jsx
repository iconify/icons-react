import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kaw7birim.css';
import '../../css/v/vk3y0vbad.css';
import '../../css/f/fc1qebbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kaw7birim"/><path class="vk3y0vbad"/><path class="fc1qebbtl"/></g>`,
		"fallback": "reicon:like-shapes",
	});
}

export default Component;
