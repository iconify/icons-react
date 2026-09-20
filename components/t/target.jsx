import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-bxn1n6m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-bxn1n6m"/>`,
		"fallback": "oi:target",
	});
}

export default Component;
