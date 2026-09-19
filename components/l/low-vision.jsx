import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccilu4bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccilu4bms"/>`,
		"fallback": "bxs:low-vision",
	});
}

export default Component;
