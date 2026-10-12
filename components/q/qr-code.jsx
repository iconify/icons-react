import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1ayrxf8e.css';
import '../../css/t/tn5lnoboq.css';
import '../../css/q/q6azb-_re.css';
import '../../css/u/uxit7ohjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 10.66 10.53)" class="t1ayrxf8e"/><rect transform="matrix(0 -1 -1 0 21.32 10.53)" class="t1ayrxf8e"/><rect transform="matrix(0 -1 -1 0 10.66 21.29)" class="t1ayrxf8e"/><rect transform="matrix(0 -1 -1 0 10.66 10.53)" class="tn5lnoboq"/><rect transform="matrix(0 -1 -1 0 21.32 10.53)" class="tn5lnoboq"/><rect transform="matrix(0 -1 -1 0 10.66 21.29)" class="tn5lnoboq"/><path class="q6azb-_re"/><path class="uxit7ohjh"/></g>`,
		"fallback": "andrsrxn:qr-code",
	});
}

export default Component;
