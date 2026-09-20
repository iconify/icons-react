import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw82xubxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw82xubxc"/>`,
		"fallback": "mingcute:rear-windshield-defroster-line",
	});
}

export default Component;
