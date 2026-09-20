import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u_o7qt45m.css';
import '../../css/l/lmrx12b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u_o7qt45m"/><path class="lmrx12b3o"/></g>`,
		"fallback": "streamline-freehand:text-formating-eraser-2",
	});
}

export default Component;
