import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6a60qx1v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6a60qx1v"/>`,
		"fallback": "selfhst:sftpgo-dark",
	});
}

export default Component;
