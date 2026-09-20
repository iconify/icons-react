import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/ddtaioxqc.css';
import '../../css/e/e3c0e9s5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ddtaioxqc"/><path class="e3c0e9s5m"/></g>`,
		"fallback": "streamline-sharp-color:repeat-single-flat",
	});
}

export default Component;
