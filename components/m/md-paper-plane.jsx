import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wte7h9b6i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wte7h9b6i"/>`,
		"fallback": "ion:md-paper-plane",
	});
}

export default Component;
