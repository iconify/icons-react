import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3i5_5bhc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3i5_5bhc"/>`,
		"fallback": "subway:join-corner-arrow-3",
	});
}

export default Component;
