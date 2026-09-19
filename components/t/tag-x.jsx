import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr-36j6gx.css';
import '../../css/z/zw8k7krbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr-36j6gx"/><path class="zw8k7krbx"/>`,
		"fallback": "boxicons:tag-x",
	});
}

export default Component;
