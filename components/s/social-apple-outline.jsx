import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so0eo1u0h.css';
import '../../css/v/vb_z8ebaf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so0eo1u0h"/><path class="vb_z8ebaf"/>`,
		"fallback": "ion:social-apple-outline",
	});
}

export default Component;
