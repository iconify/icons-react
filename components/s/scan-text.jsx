import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwtf473fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwtf473fh"/>`,
		"fallback": "hugeicons:scan-text",
	});
}

export default Component;
