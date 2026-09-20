import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mqjqe9b5h.css';
import '../../css/a/abd0ree1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mqjqe9b5h"/><path class="abd0ree1e"/></g>`,
		"fallback": "solar:map-arrow-left-line-duotone",
	});
}

export default Component;
