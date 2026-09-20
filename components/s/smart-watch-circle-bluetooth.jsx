import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nvc6t9uyq.css';
import '../../css/h/h4kcnxt2y.css';
import '../../css/q/qla2qka_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nvc6t9uyq"/><path class="h4kcnxt2y"/><path class="qla2qka_g"/></g>`,
		"fallback": "streamline-freehand:smart-watch-circle-bluetooth",
	});
}

export default Component;
