import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpze4wb0c.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpze4wb0c"/>`,
		"fallback": "fa-solid:torah",
	});
}

export default Component;
