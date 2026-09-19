import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxhm1j33d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxhm1j33d"/>`,
		"fallback": "at-icons:text-input",
	});
}

export default Component;
