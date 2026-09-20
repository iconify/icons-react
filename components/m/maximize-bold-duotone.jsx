import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c_pemcbbc.css';
import '../../css/r/rop0osbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c_pemcbbc"/><path class="rop0osbxd"/></g>`,
		"fallback": "solar:maximize-bold-duotone",
	});
}

export default Component;
