import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgekp4wny.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgekp4wny"/>`,
		"fallback": "streamline:thermometer",
	});
}

export default Component;
