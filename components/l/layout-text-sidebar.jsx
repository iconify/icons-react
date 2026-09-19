import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ac2pdfe-m.css';
import '../../css/g/gpjzify_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ac2pdfe-m"/><path class="gpjzify_h"/></g>`,
		"fallback": "bi:layout-text-sidebar",
	});
}

export default Component;
