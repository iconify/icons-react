import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsopg7s0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsopg7s0c"/>`,
		"fallback": "streamline-cyber:link-broken-1",
	});
}

export default Component;
