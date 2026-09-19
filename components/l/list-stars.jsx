import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j4ax6k-wa.css';
import '../../css/a/ahcc4cbyt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j4ax6k-wa"/><path class="ahcc4cbyt"/></g>`,
		"fallback": "bi:list-stars",
	});
}

export default Component;
