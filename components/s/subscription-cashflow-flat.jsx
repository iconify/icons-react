import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oqb4_tbjk.css';
import '../../css/r/rpdhb5bng.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oqb4_tbjk"/><path class="rpdhb5bng"/></g>`,
		"fallback": "streamline-flex-color:subscription-cashflow-flat",
	});
}

export default Component;
