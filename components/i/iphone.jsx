import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzttz05cq.css';

const viewBox = {"width":417,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzttz05cq"/>`,
		"fallback": "ls:iphone",
	});
}

export default Component;
