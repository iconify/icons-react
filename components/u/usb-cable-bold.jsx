import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4c0kcz5z.css';
import '../../css/g/gjwv7pfic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4c0kcz5z"/><path class="gjwv7pfic"/>`,
		"fallback": "streamline-ultimate:usb-cable-bold",
	});
}

export default Component;
