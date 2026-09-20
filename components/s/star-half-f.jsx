import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf6wqpb7k.css';

const viewBox = {"width":10,"height":19};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf6wqpb7k"/>`,
		"fallback": "jam:star-half-f",
	});
}

export default Component;
