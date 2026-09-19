import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji67bqb_o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji67bqb_o"/>`,
		"fallback": "fa7-solid:vault",
	});
}

export default Component;
