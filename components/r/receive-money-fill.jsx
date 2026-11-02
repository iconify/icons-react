import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz4x-hbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz4x-hbzt"/>`,
		"fallback": "mingcute:receive-money-fill",
	});
}

export default Component;
