import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjhp8_bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjhp8_bzp"/>`,
		"fallback": "coolicons:italic-bulk-round",
	});
}

export default Component;
