import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sfpznzt9e.css';
import '../../css/o/oq0b-179f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sfpznzt9e"/><path class="oq0b-179f"/></g>`,
		"fallback": "at-icons:scoreboard",
	});
}

export default Component;
