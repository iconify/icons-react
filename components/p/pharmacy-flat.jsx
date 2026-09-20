import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y6u6lqb-j.css';
import '../../css/r/r30_nbced.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y6u6lqb-j"/><path class="r30_nbced"/></g>`,
		"fallback": "streamline-plump-color:pharmacy-flat",
	});
}

export default Component;
