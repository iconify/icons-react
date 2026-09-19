import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fholtvbvf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fholtvbvf"/>`,
		"fallback": "fa6-regular:trash-can",
	});
}

export default Component;
