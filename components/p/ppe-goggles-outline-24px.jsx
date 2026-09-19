import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qjgkp75ot.css';
import '../../css/r/r7axvgb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qjgkp75ot"/><path class="r7axvgb8y"/></g>`,
		"fallback": "healthicons:ppe-goggles-outline-24px",
	});
}

export default Component;
