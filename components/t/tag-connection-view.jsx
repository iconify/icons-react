import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np6v3sb1i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="np6v3sb1i"/>`,
		"fallback": "ix:tag-connection-view",
	});
}

export default Component;
