import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk8zi3b6d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk8zi3b6d"/>`,
		"fallback": "carbon:receipt-verification",
	});
}

export default Component;
