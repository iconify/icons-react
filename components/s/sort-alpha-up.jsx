import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb2e_5bth.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb2e_5bth"/>`,
		"fallback": "fa-solid:sort-alpha-up",
	});
}

export default Component;
