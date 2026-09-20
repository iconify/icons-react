import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pseka0b5p.css';
import '../../css/l/lu0bo0b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pseka0b5p"/><path class="lu0bo0b1i"/></g>`,
		"fallback": "solar:list-arrow-down-minimalistic-bold",
	});
}

export default Component;
