import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_133ib_y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_133ib_y"/>`,
		"fallback": "fa6-solid:palette",
	});
}

export default Component;
