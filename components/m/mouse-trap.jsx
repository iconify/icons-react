import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_ap_i7do.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_ap_i7do"/>`,
		"fallback": "fluent-emoji-high-contrast:mouse-trap",
	});
}

export default Component;
