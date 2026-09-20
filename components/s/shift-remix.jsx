import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipv-ywb7n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipv-ywb7n"/>`,
		"fallback": "streamline:shift-remix",
	});
}

export default Component;
