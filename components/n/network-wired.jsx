import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aele89k-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aele89k-n"/>`,
		"fallback": "ix:network-wired",
	});
}

export default Component;
