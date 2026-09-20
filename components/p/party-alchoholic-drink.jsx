import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eigz_ac5h.css';
import '../../css/z/z99r0acmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eigz_ac5h"/><path class="z99r0acmo"/></g>`,
		"fallback": "streamline-freehand:party-alchoholic-drink",
	});
}

export default Component;
