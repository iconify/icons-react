import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ta5yezbzg.css';
import '../../css/f/f5blhxc6z.css';
import '../../css/v/vm_7tn2rv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ta5yezbzg"/><path class="f5blhxc6z"/><path class="vm_7tn2rv"/></g>`,
		"fallback": "andrsrxn:invoice",
	});
}

export default Component;
