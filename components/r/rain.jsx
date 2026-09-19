import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9k9eab0w.css';
import '../../css/m/mgnqure8x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l9k9eab0w"/><path class="mgnqure8x"/></g>`,
		"fallback": "at-icons:rain",
	});
}

export default Component;
