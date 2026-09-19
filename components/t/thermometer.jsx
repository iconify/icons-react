import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1a0p5jnw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1a0p5jnw"/>`,
		"fallback": "fa7-solid:thermometer",
	});
}

export default Component;
