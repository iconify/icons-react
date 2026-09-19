import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2rti4btb.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2rti4btb"/>`,
		"fallback": "fa-solid:restroom",
	});
}

export default Component;
