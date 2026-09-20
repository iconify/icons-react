import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwlt0zbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwlt0zbyo"/>`,
		"fallback": "tdesign:monument-filled",
	});
}

export default Component;
