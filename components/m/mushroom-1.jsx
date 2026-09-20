import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb4uxyb1q.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zb4uxyb1q"/>`,
		"fallback": "lineicons:mushroom-1",
	});
}

export default Component;
