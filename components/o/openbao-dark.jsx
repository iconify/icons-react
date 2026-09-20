import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc3j7ypou.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc3j7ypou"/>`,
		"fallback": "selfhst:openbao-dark",
	});
}

export default Component;
