import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/duyshlbnj.css';
import '../../css/w/wczjw3bzx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="duyshlbnj"/><path class="wczjw3bzx"/></g>`,
		"fallback": "streamline-color:subscription-cashflow-flat",
	});
}

export default Component;
