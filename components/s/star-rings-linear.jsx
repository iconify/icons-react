import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bssr3p4gm.css';
import '../../css/b/bn0slib0i.css';
import '../../css/s/spkxylb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bssr3p4gm"/><path class="bn0slib0i"/><path class="spkxylb2v"/></g>`,
		"fallback": "solar:star-rings-linear",
	});
}

export default Component;
