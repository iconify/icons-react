import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w5rj7bbnw.css';
import '../../css/x/xu52h8c1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary w5rj7bbnw"/><path class="primary xu52h8c1w"/></g>`,
		"fallback": "iconaut:layout-masonry-duotone",
	});
}

export default Component;
