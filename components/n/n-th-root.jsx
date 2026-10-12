import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uly2peb3h.css';
import '../../css/d/dfhfczb-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uly2peb3h"/><path class="dfhfczb-z"/></g>`,
		"fallback": "andrsrxn:n-th-root",
	});
}

export default Component;
