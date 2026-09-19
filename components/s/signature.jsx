import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh0v_w0pu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh0v_w0pu"/>`,
		"fallback": "fa7-solid:signature",
	});
}

export default Component;
