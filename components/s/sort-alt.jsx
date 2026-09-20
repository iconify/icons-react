import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5q-mvb1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x5q-mvb1j"/>`,
		"fallback": "ix:sort-alt",
	});
}

export default Component;
