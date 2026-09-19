import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2q10-yfs.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2q10-yfs"/>`,
		"fallback": "dinkie-icons:keycap-windows-filled",
	});
}

export default Component;
