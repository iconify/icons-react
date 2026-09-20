import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fco39-bpw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fco39-bpw"/>`,
		"fallback": "picon:tv",
	});
}

export default Component;
