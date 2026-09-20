import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vdklsob8k.css';
import '../../css/y/yb07jsz1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vdklsob8k"/><path class="yb07jsz1d"/></g>`,
		"fallback": "keyline-icons:package-two-tone",
	});
}

export default Component;
