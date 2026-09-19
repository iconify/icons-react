import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g-msk4u0h.css';
import '../../css/p/p52c-8bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g-msk4u0h"/><path class="p52c-8bcn"/></g>`,
		"fallback": "hugeicons:tornado-01",
	});
}

export default Component;
