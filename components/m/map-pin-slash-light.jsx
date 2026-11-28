import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9r02achd.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9r02achd"/>`,
		"fallback": "pullo:map-pin-slash-light",
	});
}

export default Component;
