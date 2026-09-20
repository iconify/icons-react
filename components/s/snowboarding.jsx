import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/asembcqpv.css';
import '../../css/s/s7tqzzhjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="asembcqpv"/><path class="s7tqzzhjg"/></g>`,
		"fallback": "tabler:snowboarding",
	});
}

export default Component;
