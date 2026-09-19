import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r-jxe9bpv.css';
import '../../css/g/gxztbyc_q.css';
import '../../css/z/zjbgnh96p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="r-jxe9bpv"/><path class="gxztbyc_q"/><path class="zjbgnh96p"/></g>`,
		"fallback": "icon-park-solid:invert-camera",
	});
}

export default Component;
