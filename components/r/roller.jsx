import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z-_6q1csr.css';
import '../../css/x/x-b7t2bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z-_6q1csr"/><path class="x-b7t2bdl"/></g>`,
		"fallback": "streamline-sharp:roller",
	});
}

export default Component;
