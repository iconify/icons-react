import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyo0ki92u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyo0ki92u"/>`,
		"fallback": "ix:plus",
	});
}

export default Component;
