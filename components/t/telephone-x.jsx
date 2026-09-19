import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d0dntab6u.css';
import '../../css/v/v7-askbif.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d0dntab6u"/><path class="v7-askbif"/></g>`,
		"fallback": "bi:telephone-x",
	});
}

export default Component;
