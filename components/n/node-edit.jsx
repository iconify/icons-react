import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f90d6rh1v.css';
import '../../css/g/g-i8fs05n.css';
import '../../css/k/kv6qicbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f90d6rh1v"/><path class="g-i8fs05n"/><path class="kv6qicbin"/></g>`,
		"fallback": "hugeicons:node-edit",
	});
}

export default Component;
