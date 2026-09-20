import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mib-tq_-m.css';
import '../../css/s/slbj5ynsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mib-tq_-m"/><path class="slbj5ynsl"/></g>`,
		"fallback": "streamline-freehand:keyboard",
	});
}

export default Component;
