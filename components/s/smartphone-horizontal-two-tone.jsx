import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wer251ban.css';
import '../../css/e/ep6lq9b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wer251ban"/><path class="ep6lq9b8d"/></g>`,
		"fallback": "keyline-icons:smartphone-horizontal-two-tone",
	});
}

export default Component;
