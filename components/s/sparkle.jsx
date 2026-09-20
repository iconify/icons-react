import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzh2_5mwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzh2_5mwc"/>`,
		"fallback": "keyline-icons:sparkle",
	});
}

export default Component;
