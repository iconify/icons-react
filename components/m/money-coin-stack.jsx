import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nu0x649hu.css';
import '../../css/r/r3n4i3brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nu0x649hu"/><path class="r3n4i3brf"/></g>`,
		"fallback": "streamline-freehand:money-coin-stack",
	});
}

export default Component;
