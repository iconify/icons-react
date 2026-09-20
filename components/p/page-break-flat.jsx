import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fnzl2bj5p.css';
import '../../css/d/dhm0otbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fnzl2bj5p"/><path class="dhm0otbcs"/></g>`,
		"fallback": "streamline-sharp-color:page-break-flat",
	});
}

export default Component;
