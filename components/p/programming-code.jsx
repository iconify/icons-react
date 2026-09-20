import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0_0luk2f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i0_0luk2f"/>`,
		"fallback": "streamline-block:programming-code",
	});
}

export default Component;
