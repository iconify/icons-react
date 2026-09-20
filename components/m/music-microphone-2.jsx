import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj_9mrpio.css';
import '../../css/t/te90vbbqs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj_9mrpio"/><path class="te90vbbqs"/>`,
		"fallback": "streamline-pixel:music-microphone-2",
	});
}

export default Component;
