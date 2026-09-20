import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqhw4ob0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqhw4ob0l"/>`,
		"fallback": "keyline-icons:user-check",
	});
}

export default Component;
