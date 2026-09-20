import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yak3gxrfd.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yak3gxrfd"/>`,
		"fallback": "memory:table-top-vertical-rotate-clockwise",
	});
}

export default Component;
