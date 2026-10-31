import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/ca5lwac6e.css';
import '../../css/l/ldbir1_le.css';
import '../../css/b/b417b6bvh.css';
import '../../css/o/o79sz90sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ca5lwac6e wm-shadow"/><path class="ldbir1_le wm-shadow"/><path class="b417b6bvh"/><path class="o79sz90sw"/></g>`,
		"fallback": "withicons-brutal:syringe",
	});
}

export default Component;
