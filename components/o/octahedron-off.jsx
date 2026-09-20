import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j5izx6f9p.css';
import '../../css/z/zcwdwf42h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j5izx6f9p"/><path class="zcwdwf42h"/></g>`,
		"fallback": "tabler:octahedron-off",
	});
}

export default Component;
