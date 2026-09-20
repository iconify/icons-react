import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t1vk1cb5q.css';
import '../../css/s/sqf9uqnkp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t1vk1cb5q"/><path class="sqf9uqnkp"/></g>`,
		"fallback": "streamline:stethoscope",
	});
}

export default Component;
