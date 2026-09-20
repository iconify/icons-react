import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx77dvllf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kx77dvllf"/>`,
		"fallback": "ix:user-check",
	});
}

export default Component;
