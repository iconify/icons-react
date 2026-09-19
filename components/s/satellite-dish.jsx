import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yejevkv4q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yejevkv4q"/>`,
		"fallback": "fa6-solid:satellite-dish",
	});
}

export default Component;
