import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n9l5e8mcr.css';
import '../../css/a/a-ewrneoj.css';
import '../../css/r/r6v1ktpdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n9l5e8mcr"/><path class="a-ewrneoj"/><path class="r6v1ktpdr"/></g>`,
		"fallback": "streamline-freehand-color:swimming-pool-person",
	});
}

export default Component;
