import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip199ph9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip199ph9k"/>`,
		"fallback": "tdesign:tape-filled",
	});
}

export default Component;
