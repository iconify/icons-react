import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opq8e0bhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="opq8e0bhf"/>`,
		"fallback": "ix:rack-ipc-question",
	});
}

export default Component;
