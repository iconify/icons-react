import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obf8cbbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obf8cbbsy"/>`,
		"fallback": "mdi:playlist-play",
	});
}

export default Component;
