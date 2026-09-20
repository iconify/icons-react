import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xmi2itb8t.css';
import '../../css/l/lu0bo0b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xmi2itb8t"/><path class="lu0bo0b1i"/></g>`,
		"fallback": "solar:list-arrow-down-minimalistic-bold-duotone",
	});
}

export default Component;
