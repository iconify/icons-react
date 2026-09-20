import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr973bb1i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr973bb1i"/>`,
		"fallback": "streamline-pixel:search-coding",
	});
}

export default Component;
