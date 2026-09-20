import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up0qlm5zo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up0qlm5zo"/>`,
		"fallback": "ix:trashcan-filled",
	});
}

export default Component;
