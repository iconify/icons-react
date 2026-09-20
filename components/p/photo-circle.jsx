import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/if82tobov.css';
import '../../css/y/yvm4rmb-d.css';
import '../../css/j/j0uan6p9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="if82tobov"/><path class="yvm4rmb-d"/><path class="j0uan6p9n"/></g>`,
		"fallback": "tabler:photo-circle",
	});
}

export default Component;
