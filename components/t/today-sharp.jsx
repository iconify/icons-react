import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg-uejb7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg-uejb7b"/>`,
		"fallback": "ion:today-sharp",
	});
}

export default Component;
