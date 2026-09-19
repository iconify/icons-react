import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us80_ldaa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us80_ldaa"/>`,
		"fallback": "file-icons:netlinx",
	});
}

export default Component;
