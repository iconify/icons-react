import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wq_fdfbxo.css';
import '../../css/l/lpxc4jb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wq_fdfbxo"/><path class="lpxc4jb4h"/></g>`,
		"fallback": "hugeicons:location-favourite-01",
	});
}

export default Component;
