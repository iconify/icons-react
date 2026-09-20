import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sv2ktyb_y.css';
import '../../css/l/l97qpbbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sv2ktyb_y"/><path class="l97qpbbsj"/></g>`,
		"fallback": "majesticons:settings-cog-check-line",
	});
}

export default Component;
