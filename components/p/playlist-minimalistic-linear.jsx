import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xa_506f5h.css';
import '../../css/p/pqx2-oyar.css';
import '../../css/z/z9-kayyqj.css';
import '../../css/y/y-maskbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xa_506f5h"/><path class="pqx2-oyar"/><path class="z9-kayyqj"/><path class="y-maskbat"/></g>`,
		"fallback": "solar:playlist-minimalistic-linear",
	});
}

export default Component;
