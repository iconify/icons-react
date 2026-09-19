import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_xmz3w6k.css';

const viewBox = {"width":1026,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_xmz3w6k"/>`,
		"fallback": "whh:popcorn",
	});
}

export default Component;
