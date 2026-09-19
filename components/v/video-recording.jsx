import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xalk1bbvn.css';
import '../../css/r/r0ke4kbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xalk1bbvn"/><path class="r0ke4kbpu"/>`,
		"fallback": "bx:video-recording",
	});
}

export default Component;
