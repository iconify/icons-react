import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vz4ex_nwa.css';
import '../../css/o/oon-w3n8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vz4ex_nwa"/><path class="oon-w3n8t"/></g>`,
		"fallback": "streamline-freehand:money-bill-fly",
	});
}

export default Component;
