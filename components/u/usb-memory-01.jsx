import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/ao10ozfpq.css';
import '../../css/c/c2bfh4dgq.css';
import '../../css/o/orzk3obqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ao10ozfpq"/><path class="c2bfh4dgq"/><path class="orzk3obqe"/></g>`,
		"fallback": "hugeicons:usb-memory-01",
	});
}

export default Component;
