import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fja0ejbdp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fja0ejbdp"/>`,
		"fallback": "vaadin:level-up",
	});
}

export default Component;
