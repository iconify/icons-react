import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/leo2il2pz.css';
import '../../css/l/l3a0d1bhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="leo2il2pz"/><path class="l3a0d1bhb"/></g>`,
		"fallback": "andrsrxn:table",
	});
}

export default Component;
