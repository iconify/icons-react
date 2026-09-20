import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhhz9ab1q.css';
import '../../css/x/xwfu_degj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhhz9ab1q"/><path class="xwfu_degj"/>`,
		"fallback": "streamline-pixel:interface-essential-stop-sign-1",
	});
}

export default Component;
