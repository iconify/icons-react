import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okw3wfbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okw3wfbvh"/>`,
		"fallback": "bx:store-alt",
	});
}

export default Component;
