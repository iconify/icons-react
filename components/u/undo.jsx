import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfc6mf-ng.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfc6mf-ng"/>`,
		"fallback": "raphael:undo",
	});
}

export default Component;
