import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya2p9ecfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya2p9ecfk"/>`,
		"fallback": "mdi:letter-i-box-outline",
	});
}

export default Component;
