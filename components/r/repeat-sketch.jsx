import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kj_zj2cjc.css';
import '../../css/s/si9s5fb2e.css';
import '../../css/w/w4vj0mdzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kj_zj2cjc wm-k"/><path class="si9s5fb2e wm-k"/><path class="w4vj0mdzj wm-a"/></g>`,
		"fallback": "withicons:repeat-sketch",
	});
}

export default Component;
