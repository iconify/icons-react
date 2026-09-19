import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gfqwhpbqs.css';
import '../../css/j/js8uj5b5b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gfqwhpbqs"/><path class="js8uj5b5b"/></g>`,
		"fallback": "bi:record2",
	});
}

export default Component;
