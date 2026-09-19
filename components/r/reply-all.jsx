import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scsv6ubbs.css';
import '../../css/n/nxv1jnq8k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scsv6ubbs"/><path class="nxv1jnq8k"/>`,
		"fallback": "ion:reply-all",
	});
}

export default Component;
