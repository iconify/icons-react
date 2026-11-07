import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-ejzngjy.css';
import '../../css/r/rc0x7kb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q-ejzngjy"/><path class="rc0x7kb9f"/>`,
		"fallback": "solar:streets-map-point-outline",
	});
}

export default Component;
