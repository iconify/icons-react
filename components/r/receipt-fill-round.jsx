import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjat-_exd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjat-_exd"/>`,
		"fallback": "coolicons:receipt-fill-round",
	});
}

export default Component;
