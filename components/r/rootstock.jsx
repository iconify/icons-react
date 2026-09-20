import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc72tnbzk.css';
import '../../css/i/i3fanzlul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc72tnbzk"/><path class="i3fanzlul"/>`,
		"fallback": "token:rootstock",
	});
}

export default Component;
