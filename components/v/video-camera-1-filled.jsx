import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df3f3o36e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df3f3o36e"/>`,
		"fallback": "tdesign:video-camera-1-filled",
	});
}

export default Component;
