import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ymwuqkrmm.css';
import '../../css/x/x5hmubb-n.css';
import '../../css/m/m7-i0ybpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ymwuqkrmm"/><path class="x5hmubb-n"/><path class="m7-i0ybpu"/></g>`,
		"fallback": "keyline-icons:pen-off-two-tone",
	});
}

export default Component;
