import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt-xabb5x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt-xabb5x"/>`,
		"fallback": "la:procedures-solid",
	});
}

export default Component;
