import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ropz80lgh.css';
import '../../css/l/lt-glacsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ropz80lgh"/><path class="lt-glacsa"/></g>`,
		"fallback": "streamline-freehand:transfer-pictures-smartphone",
	});
}

export default Component;
