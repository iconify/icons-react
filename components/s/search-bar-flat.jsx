import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ow4o9x4_f.css';
import '../../css/u/umx2ubk5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ow4o9x4_f"/><path class="umx2ubk5r"/></g>`,
		"fallback": "streamline-sharp-color:search-bar-flat",
	});
}

export default Component;
