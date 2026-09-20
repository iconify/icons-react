import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pn9cv1bhx.css';
import '../../css/x/xx92uub9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pn9cv1bhx"/><path class="xx92uub9e"/></g>`,
		"fallback": "streamline-sharp-color:traffic-light-flat",
	});
}

export default Component;
