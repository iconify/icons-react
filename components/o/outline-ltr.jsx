import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cod50bpfv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cod50bpfv"/>`,
		"fallback": "ooui:outline-ltr",
	});
}

export default Component;
