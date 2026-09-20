import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0-p-2upt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0-p-2upt"/>`,
		"fallback": "raphael:sticker",
	});
}

export default Component;
