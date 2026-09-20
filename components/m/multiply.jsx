import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skl2_xb6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skl2_xb6m"/>`,
		"fallback": "subway:multiply",
	});
}

export default Component;
