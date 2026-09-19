import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttuo31bdi.css';
import '../../css/t/t8-pfyb8l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ttuo31bdi"/><rect class="t8-pfyb8l"/></g>`,
		"fallback": "garden:thumbs-up-fill-16",
	});
}

export default Component;
