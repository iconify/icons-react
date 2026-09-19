import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hxiugsb0s.css';
import '../../css/z/zd3tqrdvm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hxiugsb0s"/><path class="zd3tqrdvm"/></g>`,
		"fallback": "healthicons:outbreak2x-outline",
	});
}

export default Component;
