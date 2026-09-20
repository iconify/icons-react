import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zbtapkbpv.css';
import '../../css/e/erru8j8oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zbtapkbpv"/><path class="erru8j8oi"/></g>`,
		"fallback": "tabler:needle-thread",
	});
}

export default Component;
