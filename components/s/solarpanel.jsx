import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_pbrfbba.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_pbrfbba"/>`,
		"fallback": "whh:solarpanel",
	});
}

export default Component;
