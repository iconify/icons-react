import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e76d37bpx.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e76d37bpx"/>`,
		"fallback": "fa-solid:subway",
	});
}

export default Component;
