import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck7z_9alj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck7z_9alj"/>`,
		"fallback": "streamline-pixel:interface-essential-iris-scan-approved",
	});
}

export default Component;
