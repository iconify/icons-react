import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bezyg0w5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bezyg0w5n"/>`,
		"fallback": "mdi:ocr",
	});
}

export default Component;
