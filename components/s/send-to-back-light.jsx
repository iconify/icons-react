import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms497sa8t.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms497sa8t"/>`,
		"fallback": "pullo:send-to-back-light",
	});
}

export default Component;
