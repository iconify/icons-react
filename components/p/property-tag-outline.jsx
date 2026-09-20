import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh0xbabcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh0xbabcl"/>`,
		"fallback": "mdi:property-tag-outline",
	});
}

export default Component;
