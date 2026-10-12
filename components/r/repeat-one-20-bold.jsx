import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixv82_hid.css';
import '../../css/e/e6-p1ybyd.css';
import '../../css/b/bxy1g4b3o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixv82_hid"/><path class="e6-p1ybyd"/><path class="bxy1g4b3o"/>`,
		"fallback": "energy-icons:repeat-one-20-bold",
	});
}

export default Component;
