import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiwv_cb8v.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiwv_cb8v"/>`,
		"fallback": "zmdi:shuffle",
	});
}

export default Component;
