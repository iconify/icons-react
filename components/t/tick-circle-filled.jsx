import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvor7v2hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvor7v2hn"/>`,
		"fallback": "reicon:tick-circle-filled",
	});
}

export default Component;
