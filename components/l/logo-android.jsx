import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-0a6u8qc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-0a6u8qc"/>`,
		"fallback": "ion:logo-android",
	});
}

export default Component;
