import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2b_z-b_c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2b_z-b_c"/>`,
		"fallback": "fluent-emoji-high-contrast:mantelpiece-clock",
	});
}

export default Component;
