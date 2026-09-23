import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mtrq2abyh.css';
import '../../css/g/g5xmclb7x.css';
import '../../css/k/koohx5niu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mtrq2abyh"/><path class="g5xmclb7x"/><path class="koohx5niu"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-start-sparkles-two-tone",
	});
}

export default Component;
