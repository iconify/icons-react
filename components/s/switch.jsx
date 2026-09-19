import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc-j51bxh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc-j51bxh"/>`,
		"fallback": "ion:switch",
	});
}

export default Component;
