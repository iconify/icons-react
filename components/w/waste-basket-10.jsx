import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1j9atx_y.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1j9atx_y"/>`,
		"fallback": "osmic:waste-basket-10",
	});
}

export default Component;
