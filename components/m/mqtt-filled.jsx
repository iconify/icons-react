import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy3l7hbqd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wy3l7hbqd"/>`,
		"fallback": "ix:mqtt-filled",
	});
}

export default Component;
