import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfnphxbws.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfnphxbws"/>`,
		"fallback": "streamline-pixel:interface-essential-alert-circle-2",
	});
}

export default Component;
