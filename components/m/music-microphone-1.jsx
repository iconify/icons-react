import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgmz4lbip.css';
import '../../css/v/vaynj5-ur.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgmz4lbip"/><path class="vaynj5-ur"/>`,
		"fallback": "streamline-pixel:music-microphone-1",
	});
}

export default Component;
