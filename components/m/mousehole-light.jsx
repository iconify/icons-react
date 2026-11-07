import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh-l097mh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh-l097mh"/>`,
		"fallback": "selfhst:mousehole-light",
	});
}

export default Component;
