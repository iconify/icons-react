import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywvj5dbrg.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywvj5dbrg"/>`,
		"fallback": "fa-brands:vaadin",
	});
}

export default Component;
