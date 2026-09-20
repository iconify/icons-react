import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg994ldbp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg994ldbp"/>`,
		"fallback": "ix:surveillance-cancelled-filled",
	});
}

export default Component;
