import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jivb_cbdx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jivb_cbdx"/>`,
		"fallback": "subway:redo-1",
	});
}

export default Component;
