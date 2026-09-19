import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udhv20bpo.css';

const viewBox = {"width":768,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udhv20bpo"/>`,
		"fallback": "whh:simalt",
	});
}

export default Component;
