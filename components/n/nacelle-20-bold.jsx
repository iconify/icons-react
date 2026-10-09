import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9w0v0j8h.css';
import '../../css/k/kyt7f6bbc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9w0v0j8h"/><path class="kyt7f6bbc"/>`,
		"fallback": "energy-icons:nacelle-20-bold",
	});
}

export default Component;
