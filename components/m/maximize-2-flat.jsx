import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vd3x0x_5y.css';
import '../../css/g/gei-5zbdk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vd3x0x_5y"/><path class="gei-5zbdk"/></g>`,
		"fallback": "streamline-flex-color:maximize-2-flat",
	});
}

export default Component;
