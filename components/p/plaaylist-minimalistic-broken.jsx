import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pqx2-oyar.css';
import '../../css/z/z9-kayyqj.css';
import '../../css/y/y-maskbat.css';
import '../../css/i/iq-a2cc9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pqx2-oyar"/><path class="z9-kayyqj"/><path class="y-maskbat"/><path class="iq-a2cc9w"/></g>`,
		"fallback": "solar:plaaylist-minimalistic-broken",
	});
}

export default Component;
