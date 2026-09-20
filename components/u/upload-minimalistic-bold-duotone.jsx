import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y6lx2lb9z.css';
import '../../css/c/cil-6cbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y6lx2lb9z"/><path class="cil-6cbgz"/></g>`,
		"fallback": "solar:upload-minimalistic-bold-duotone",
	});
}

export default Component;
