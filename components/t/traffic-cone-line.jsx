import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl75c2-_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl75c2-_v"/>`,
		"fallback": "si:traffic-cone-line",
	});
}

export default Component;
