import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ocom96blx.css';
import '../../css/b/bxdowfblq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ocom96blx"/><path class="bxdowfblq"/></g>`,
		"fallback": "streamline-flex-color:party-popper-flat",
	});
}

export default Component;
