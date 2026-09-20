import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd8vn1rbq.css';
import '../../css/y/yuj1lj0ko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd8vn1rbq"/><path class="yuj1lj0ko"/>`,
		"fallback": "streamline-ultimate:iris-scan-1-bold",
	});
}

export default Component;
