import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5l9kaceg.css';
import '../../css/w/wao3ae53h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5l9kaceg"/><path class="wao3ae53h"/>`,
		"fallback": "circum:medical-case",
	});
}

export default Component;
