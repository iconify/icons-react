import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbc9os0zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbc9os0zg"/>`,
		"fallback": "coolicons:paperclip-fill-round",
	});
}

export default Component;
