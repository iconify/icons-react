import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pumtkybmt.css';
import '../../css/o/oiq5qybkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pumtkybmt"/><path class="oiq5qybkp"/></g>`,
		"fallback": "streamline-sharp-color:phone-circle-off-flat",
	});
}

export default Component;
