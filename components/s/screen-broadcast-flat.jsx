import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pfuo8bcyf.css';
import '../../css/u/uvvtc9n2o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pfuo8bcyf"/><path class="uvvtc9n2o"/></g>`,
		"fallback": "streamline-flex-color:screen-broadcast-flat",
	});
}

export default Component;
