import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1h5u9bee.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1h5u9bee"/>`,
		"fallback": "fa6-solid:trash-can-arrow-up",
	});
}

export default Component;
