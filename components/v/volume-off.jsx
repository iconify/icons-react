import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxts3kbaj.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxts3kbaj"/>`,
		"fallback": "zmdi:volume-off",
	});
}

export default Component;
