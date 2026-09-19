import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up3p33-bz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="up3p33-bz"/>`,
		"fallback": "gravity-ui:shopping-cart",
	});
}

export default Component;
