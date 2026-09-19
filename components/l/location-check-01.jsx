import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wq_fdfbxo.css';
import '../../css/o/o3_uebbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wq_fdfbxo"/><path class="o3_uebbrt"/></g>`,
		"fallback": "hugeicons:location-check-01",
	});
}

export default Component;
