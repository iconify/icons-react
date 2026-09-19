import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m6wzxybxv.css';
import '../../css/r/r8be6tbfh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m6wzxybxv"/><path class="r8be6tbfh"/></g>`,
		"fallback": "healthicons:pulse-oximeter",
	});
}

export default Component;
