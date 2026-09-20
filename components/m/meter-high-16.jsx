import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oewliqb1a.css';
import '../../css/c/cc1vgdb1t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oewliqb1a"/><path class="cc1vgdb1t"/>`,
		"fallback": "qlementine-icons:meter-high-16",
	});
}

export default Component;
