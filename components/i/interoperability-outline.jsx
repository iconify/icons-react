import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sa55vv6lj.css';
import '../../css/f/flqnofbpu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sa55vv6lj"/><path class="flqnofbpu"/></g>`,
		"fallback": "healthicons:interoperability-outline",
	});
}

export default Component;
