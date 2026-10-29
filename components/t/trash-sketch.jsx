import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m1ipstgyu.css';
import '../../css/q/qkxhjdbov.css';
import '../../css/q/qihvvue2f.css';
import '../../css/q/q183izpwp.css';
import '../../css/t/t208bbbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m1ipstgyu"/><path class="qkxhjdbov wm-k"/><path class="qihvvue2f wm-a"/><path class="q183izpwp wm-k"/><path class="t208bbbrz wm-a"/></g>`,
		"fallback": "withicons:trash-sketch",
	});
}

export default Component;
