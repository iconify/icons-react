import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxfn-h1ce.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxfn-h1ce"/>`,
		"fallback": "vaadin:pin-post",
	});
}

export default Component;
