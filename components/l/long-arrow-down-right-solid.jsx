import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/n/n92k7mrib.css';
import '../../css/l/luu88ebmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="n92k7mrib"/><path class="luu88ebmo"/></g>`,
		"fallback": "iconoir:long-arrow-down-right-solid",
	});
}

export default Component;
