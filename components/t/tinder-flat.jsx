import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8-6i4bgp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8-6i4bgp"/>`,
		"fallback": "streamline-color:tinder-flat",
	});
}

export default Component;
