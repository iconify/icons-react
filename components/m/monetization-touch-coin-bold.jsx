import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk1yoeo-c.css';
import '../../css/i/i31-_h-xy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk1yoeo-c"/><path class="i31-_h-xy"/>`,
		"fallback": "streamline-ultimate:monetization-touch-coin-bold",
	});
}

export default Component;
