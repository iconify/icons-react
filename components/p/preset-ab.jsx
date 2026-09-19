import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm4sl1b2p.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm4sl1b2p"/>`,
		"fallback": "fad:preset-ab",
	});
}

export default Component;
