import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rhq6dbcur.css';
import '../../css/o/olnotz5yy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="rhq6dbcur"/><path class="olnotz5yy"/></g>`,
		"fallback": "icon-park-outline:wallet-two",
	});
}

export default Component;
