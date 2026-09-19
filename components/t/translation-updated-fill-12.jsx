import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0_8gkb3b.css';
import '../../css/l/l6c64qyvc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0_8gkb3b"/><path class="l6c64qyvc"/>`,
		"fallback": "garden:translation-updated-fill-12",
	});
}

export default Component;
