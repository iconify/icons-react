import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn_jahutr.css';
import '../../css/q/qtvna5bjx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn_jahutr"/><path class="qtvna5bjx"/>`,
		"fallback": "streamline-pixel:interface-essential-magnet",
	});
}

export default Component;
