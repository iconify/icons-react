import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zimgv8bvk.css';
import '../../css/c/cudl-bmyd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zimgv8bvk"/><path class="cudl-bmyd"/>`,
		"fallback": "selfhst:plmail-dark",
	});
}

export default Component;
