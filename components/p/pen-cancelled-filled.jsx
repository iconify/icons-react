import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m057asb6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m057asb6d"/>`,
		"fallback": "ix:pen-cancelled-filled",
	});
}

export default Component;
