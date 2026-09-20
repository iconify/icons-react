import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ch-jjshif.css';
import '../../css/j/jsdraptgn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ch-jjshif"/><path class="jsdraptgn"/></g>`,
		"fallback": "streamline-flex-color:warehouse-1-flat",
	});
}

export default Component;
