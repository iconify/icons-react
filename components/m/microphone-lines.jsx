import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2sodkblz.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2sodkblz"/>`,
		"fallback": "fa6-solid:microphone-lines",
	});
}

export default Component;
