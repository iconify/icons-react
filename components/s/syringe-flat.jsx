import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bx1micbgd.css';
import '../../css/h/homken_nw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bx1micbgd"/><path class="homken_nw"/></g>`,
		"fallback": "streamline-color:syringe-flat",
	});
}

export default Component;
