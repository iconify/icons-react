import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kuybt0bap.css';
import '../../css/e/efd17ac1z.css';
import '../../css/w/wjnfdsdtm.css';
import '../../css/n/n5gs_1b0s.css';
import '../../css/d/d4jkpdbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kuybt0bap wm-k"/><path class="efd17ac1z wm-a"/><path class="wjnfdsdtm wm-k"/><path class="n5gs_1b0s wm-a"/><path class="d4jkpdbby wm-a"/></g>`,
		"fallback": "withicons:target-sketch",
	});
}

export default Component;
