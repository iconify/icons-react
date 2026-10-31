import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry0e54byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry0e54byo"/>`,
		"fallback": "coolicons:mobile-download-corner-fill-round",
	});
}

export default Component;
