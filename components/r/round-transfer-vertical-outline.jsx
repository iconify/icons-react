import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sbgj8s2qu.css';
import '../../css/v/vpeevbh4j.css';
import '../../css/j/jlrds1q4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sbgj8s2qu"/><path class="vpeevbh4j"/><path class="jlrds1q4q"/></g>`,
		"fallback": "solar:round-transfer-vertical-outline",
	});
}

export default Component;
