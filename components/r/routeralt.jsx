import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yximimb5y.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yximimb5y"/>`,
		"fallback": "whh:routeralt",
	});
}

export default Component;
