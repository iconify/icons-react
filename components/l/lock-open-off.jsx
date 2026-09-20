import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yv1sncb1v.css';
import '../../css/s/sha7wsr0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yv1sncb1v"/><path class="sha7wsr0j"/></g>`,
		"fallback": "tabler:lock-open-off",
	});
}

export default Component;
