import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zgz-fkb1z.css';
import '../../css/i/i350nbclg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zgz-fkb1z"/><path class="i350nbclg"/></g>`,
		"fallback": "at-icons:vertex",
	});
}

export default Component;
