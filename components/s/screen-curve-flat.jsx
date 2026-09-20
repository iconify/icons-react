import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/ncfk0mbxp.css';
import '../../css/v/vxed1o5ur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ncfk0mbxp"/><path class="vxed1o5ur"/></g>`,
		"fallback": "streamline-flex-color:screen-curve-flat",
	});
}

export default Component;
