import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x706t8bpn.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x706t8bpn"/>`,
		"fallback": "picon:read",
	});
}

export default Component;
