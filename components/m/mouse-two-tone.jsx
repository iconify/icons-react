import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/teyv8_8vu.css';
import '../../css/k/ku8rdplcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="teyv8_8vu"/><path class="ku8rdplcq"/></g>`,
		"fallback": "keyline-icons:mouse-two-tone",
	});
}

export default Component;
