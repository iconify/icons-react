import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dokkydlwa.css';
import '../../css/p/pf8jp1bza.css';
import '../../css/k/kni8ltbwm.css';
import '../../css/n/nz6xrlb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dokkydlwa"/><path class="pf8jp1bza wm-a"/><path class="kni8ltbwm wm-k"/><path class="nz6xrlb9f wm-a"/></g>`,
		"fallback": "withicons:layout-template-sketch",
	});
}

export default Component;
