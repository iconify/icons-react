import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/db1umvx0z.css';
import '../../css/g/gbdaxyb2n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="db1umvx0z"/><path class="gbdaxyb2n"/></g>`,
		"fallback": "streamline-flex-color:pencil-square-flat",
	});
}

export default Component;
