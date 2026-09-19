import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qohmh9b5t.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qohmh9b5t"/>`,
		"fallback": "fa-brands:tencent-weibo",
	});
}

export default Component;
