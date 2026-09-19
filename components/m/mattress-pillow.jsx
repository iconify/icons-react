import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vabbgtf6n.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vabbgtf6n"/>`,
		"fallback": "fa6-solid:mattress-pillow",
	});
}

export default Component;
