import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzdt-h-hq.css';
import '../../css/w/w8iuawbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzdt-h-hq"/><path clip-rule="evenodd" class="w8iuawbsc"/>`,
		"fallback": "solar:microphone-2-bold",
	});
}

export default Component;
