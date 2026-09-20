import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zistk-b0s.css';
import '../../css/g/grrmarz6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zistk-b0s"/><path class="grrmarz6y"/></g>`,
		"fallback": "lucide:message-square-code",
	});
}

export default Component;
