import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mevf1wekm.css';
import '../../css/i/ik-b2z0to.css';
import '../../css/l/l8ziygp-z.css';
import '../../css/a/ah9y98gxq.css';
import '../../css/d/dfx-lljpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mevf1wekm"/><path class="ik-b2z0to"/><path class="l8ziygp-z"/><path class="ah9y98gxq"/><path class="dfx-lljpe"/></g>`,
		"fallback": "solar:tornado-small-broken",
	});
}

export default Component;
