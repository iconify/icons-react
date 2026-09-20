import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-zplccpq.css';
import '../../css/v/vn8jdeb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k-zplccpq"/><path class="vn8jdeb6b"/></g>`,
		"fallback": "tabler:network-off",
	});
}

export default Component;
