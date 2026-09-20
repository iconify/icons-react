import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pq55qvb7b.css';
import '../../css/k/k5p2vccgg.css';
import '../../css/g/gt2lf583p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pq55qvb7b"/><path class="k5p2vccgg"/><path class="gt2lf583p"/></g>`,
		"fallback": "tabler:transform-point-top-right",
	});
}

export default Component;
