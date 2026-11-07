import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-mei2b6d.css';
import '../../css/n/nudj6ubep.css';
import '../../css/g/gl_0n93vk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-mei2b6d"/><path class="nudj6ubep"/><path clip-rule="evenodd" class="gl_0n93vk"/>`,
		"fallback": "solar:rugby-bold",
	});
}

export default Component;
