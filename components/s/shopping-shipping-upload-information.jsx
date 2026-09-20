import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgid5pwjd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgid5pwjd"/>`,
		"fallback": "streamline-pixel:shopping-shipping-upload-information",
	});
}

export default Component;
