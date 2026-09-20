import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9qwb5mqe.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9qwb5mqe"/>`,
		"fallback": "system-uicons:paperclip",
	});
}

export default Component;
