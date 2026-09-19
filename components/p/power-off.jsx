import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9o733qam.css';

const viewBox = {"width":1536,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9o733qam"/>`,
		"fallback": "fa:power-off",
	});
}

export default Component;
