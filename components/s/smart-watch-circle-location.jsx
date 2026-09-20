import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jqqgpou1b.css';
import '../../css/r/rxm4e15li.css';
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
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jqqgpou1b"/><path class="rxm4e15li"/><path class="h4kcnxt2y"/><path class="qla2qka_g"/></g>`,
		"fallback": "streamline-freehand:smart-watch-circle-location",
	});
}

export default Component;
