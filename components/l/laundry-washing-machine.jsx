import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oabrzubno.css';
import '../../css/s/s-0rvs0ec.css';
import '../../css/z/zruh-lbqh.css';
import '../../css/v/v0xg5qbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oabrzubno"/><path class="s-0rvs0ec"/><path class="zruh-lbqh"/><path class="v0xg5qbry"/></g>`,
		"fallback": "streamline-freehand-color:laundry-washing-machine",
	});
}

export default Component;
