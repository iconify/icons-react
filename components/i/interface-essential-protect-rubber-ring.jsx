import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guip_qbnz.css';
import '../../css/u/u8xg6l0oi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guip_qbnz"/><path class="u8xg6l0oi"/>`,
		"fallback": "streamline-pixel:interface-essential-protect-rubber-ring",
	});
}

export default Component;
