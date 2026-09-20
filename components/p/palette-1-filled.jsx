import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu2nr00zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu2nr00zm"/>`,
		"fallback": "tdesign:palette-1-filled",
	});
}

export default Component;
