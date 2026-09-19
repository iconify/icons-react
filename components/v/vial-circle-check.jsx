import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr3-job0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr3-job0b"/>`,
		"fallback": "fa6-solid:vial-circle-check",
	});
}

export default Component;
