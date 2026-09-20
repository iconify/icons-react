import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu1wlbb0f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu1wlbb0f"/>`,
		"fallback": "streamline:nature-ecology-dog-head-dog-pet-animals-canine",
	});
}

export default Component;
