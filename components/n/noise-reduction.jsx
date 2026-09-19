import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ni5z2zbqg.css';
import '../../css/k/ku74-3b0h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ni5z2zbqg"/><path class="ku74-3b0h"/></g>`,
		"fallback": "bi:noise-reduction",
	});
}

export default Component;
