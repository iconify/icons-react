import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axi0zrbae.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axi0zrbae"/>`,
		"fallback": "system-uicons:marquee",
	});
}

export default Component;
