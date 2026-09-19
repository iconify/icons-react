import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo7aoqzxk.css';
import '../../css/l/l4be4thee.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo7aoqzxk"/><path class="l4be4thee"/>`,
		"fallback": "ion:ios-email",
	});
}

export default Component;
