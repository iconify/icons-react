import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqguvqr_y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqguvqr_y"/>`,
		"fallback": "fa7-solid:shipping-fast",
	});
}

export default Component;
