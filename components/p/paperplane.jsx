import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd93a87yh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd93a87yh"/>`,
		"fallback": "vaadin:paperplane",
	});
}

export default Component;
