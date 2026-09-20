import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keccfcbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keccfcbyk"/>`,
		"fallback": "ri:signal-wifi-3-line",
	});
}

export default Component;
