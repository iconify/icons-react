import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i24bdwb1y.css';
import '../../css/c/ctfc6kb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i24bdwb1y"/><path class="ctfc6kb2f"/></g>`,
		"fallback": "hugeicons:picture-in-picture",
	});
}

export default Component;
