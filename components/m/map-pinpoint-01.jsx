import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ym9ihsbta.css';
import '../../css/v/v59288b0k.css';
import '../../css/p/pjlpop4pn.css';
import '../../css/k/k1ou4_b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ym9ihsbta"/><path class="v59288b0k"/><path class="pjlpop4pn"/><path class="k1ou4_b5f"/></g>`,
		"fallback": "hugeicons:map-pinpoint-01",
	});
}

export default Component;
