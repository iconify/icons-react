import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y83n522hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y83n522hj"/>`,
		"fallback": "keyline-icons:printer-sharp",
	});
}

export default Component;
