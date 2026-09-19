import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygemgcbts.css';

const viewBox = {"width":1027,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygemgcbts"/>`,
		"fallback": "whh:watch",
	});
}

export default Component;
