import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mgxqsac1a.css';
import '../../css/j/j7m63qb_b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mgxqsac1a"/><path class="j7m63qb_b"/></g>`,
		"fallback": "bi:usb",
	});
}

export default Component;
