import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wd7mivbxy.css';
import '../../css/l/lhbc-ebvp.css';
import '../../css/k/kq34-c6zf.css';
import '../../css/f/fyq3xsbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wd7mivbxy"/><path class="lhbc-ebvp"/><path class="kq34-c6zf"/><path class="fyq3xsbem"/></g>`,
		"fallback": "streamline-freehand:music-basket",
	});
}

export default Component;
