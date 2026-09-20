import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz6_x4b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz6_x4b_n"/>`,
		"fallback": "simple-icons:revolut",
	});
}

export default Component;
