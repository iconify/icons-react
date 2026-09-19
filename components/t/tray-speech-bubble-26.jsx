import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kub96ib8q.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kub96ib8q"/>`,
		"fallback": "garden:tray-speech-bubble-26",
	});
}

export default Component;
