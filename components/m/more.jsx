import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiqw2lbmq.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiqw2lbmq"/>`,
		"fallback": "zmdi:more",
	});
}

export default Component;
