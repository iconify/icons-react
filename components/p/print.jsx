import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg51_9s6g.css';

const viewBox = {"width":1664,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg51_9s6g"/>`,
		"fallback": "fa:print",
	});
}

export default Component;
