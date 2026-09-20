import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulus40b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulus40b5x"/>`,
		"fallback": "uil:mailbox-alt",
	});
}

export default Component;
