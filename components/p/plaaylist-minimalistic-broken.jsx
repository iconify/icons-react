import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pqx2-oyar.css';
import '../../css/z/z9-kayyqj.css';
import '../../css/j/j2m13bcqy.css';
import '../../css/u/u_o-z9bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pqx2-oyar"/><path class="z9-kayyqj"/><path class="j2m13bcqy"/><path class="u_o-z9bwv"/></g>`,
		"fallback": "solar:plaaylist-minimalistic-broken",
	});
}

export default Component;
