import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w9oy8ibzg.css';
import '../../css/k/k64i6nb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w9oy8ibzg"/><path class="k64i6nb5q"/></g>`,
		"fallback": "tabler:table-dollar",
	});
}

export default Component;
