import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4cak4b3x.css';
import '../../css/h/hydipxqed.css';
import '../../css/m/mk4tyejxw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4cak4b3x"/><path class="hydipxqed"/><path class="mk4tyejxw"/></g>`,
		"fallback": "unjs:unhead",
	});
}

export default Component;
