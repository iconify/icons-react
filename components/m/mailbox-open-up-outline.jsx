import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhu9g0z5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhu9g0z5j"/>`,
		"fallback": "mdi:mailbox-open-up-outline",
	});
}

export default Component;
