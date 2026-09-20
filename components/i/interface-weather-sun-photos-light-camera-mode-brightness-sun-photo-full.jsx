import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xa2w_zv3q.css';
import '../../css/p/p53jilqzt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xa2w_zv3q"/><path class="p53jilqzt"/></g>`,
		"fallback": "streamline:interface-weather-sun-photos-light-camera-mode-brightness-sun-photo-full",
	});
}

export default Component;
