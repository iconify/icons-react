import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfc3-ybwc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfc3-ybwc"/>`,
		"fallback": "ix:mouse-select-filled",
	});
}

export default Component;
