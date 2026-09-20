import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm7u26bru.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm7u26bru"/>`,
		"fallback": "wi:moon-5",
	});
}

export default Component;
