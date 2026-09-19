import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkxxtlbau.css';

const viewBox = {"width":500,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qkxxtlbau"/>`,
		"fallback": "file-icons:lex",
	});
}

export default Component;
