import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tjs9uw1hq.css';
import '../../css/e/eiujrabay.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tjs9uw1hq"/><path class="eiujrabay"/></g>`,
		"fallback": "streamline-color:party-popper-flat",
	});
}

export default Component;
