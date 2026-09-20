import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz253gb7i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz253gb7i"/>`,
		"fallback": "la:skating-solid",
	});
}

export default Component;
