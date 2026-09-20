import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zpr5x_-lm.css';
import '../../css/o/o0my61btq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zpr5x_-lm"/><path class="o0my61btq"/></g>`,
		"fallback": "keyline-icons:shapes-2-two-tone",
	});
}

export default Component;
