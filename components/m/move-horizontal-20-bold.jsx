import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne19vg9-n.css';
import '../../css/n/n0aw6mhri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne19vg9-n"/><path class="n0aw6mhri"/>`,
		"fallback": "energy-icons:move-horizontal-20-bold",
	});
}

export default Component;
