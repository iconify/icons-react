import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wte99mb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wte99mb7f"/>`,
		"fallback": "weui:sticker-filled",
	});
}

export default Component;
