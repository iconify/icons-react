import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bcy6f_7hn.css';
import '../../css/y/yyxdzw-7o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bcy6f_7hn"/><path class="yyxdzw-7o"/></g>`,
		"fallback": "streamline-color:rain-cloud-flat",
	});
}

export default Component;
