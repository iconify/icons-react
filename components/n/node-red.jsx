import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-eh3wbpz.css';
import '../../css/j/j-38zcbgj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-eh3wbpz"/><path class="j-38zcbgj"/>`,
		"fallback": "selfhst:node-red",
	});
}

export default Component;
