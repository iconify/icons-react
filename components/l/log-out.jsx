import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze8le8r9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze8le8r9b"/>`,
		"fallback": "hugeicons:log-out",
	});
}

export default Component;
