import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rizmdybhn.css';
import '../../css/v/vfm45qp2i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rizmdybhn"/><path class="vfm45qp2i"/>`,
		"fallback": "carbon:scalpel-select",
	});
}

export default Component;
