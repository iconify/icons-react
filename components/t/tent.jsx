import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk-_a8_0h.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk-_a8_0h"/>`,
		"fallback": "memory:tent",
	});
}

export default Component;
