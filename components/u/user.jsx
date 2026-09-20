import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0_j2mtzs.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0_j2mtzs"/>`,
		"fallback": "iwwa:user",
	});
}

export default Component;
