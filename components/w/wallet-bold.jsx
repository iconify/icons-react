import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b9p-0dbve.css';
import '../../css/h/hy4fhddkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b9p-0dbve"/><path class="hy4fhddkl"/></g>`,
		"fallback": "solar:wallet-bold",
	});
}

export default Component;
