import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em-0n8irn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em-0n8irn"/>`,
		"fallback": "fa6-solid:road-circle-check",
	});
}

export default Component;
