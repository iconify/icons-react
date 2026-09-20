import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vynof2yuv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vynof2yuv"/>`,
		"fallback": "selfhst:mitra-dark",
	});
}

export default Component;
