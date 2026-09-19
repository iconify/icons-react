import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/f7wlwbcoj.css';
import '../../css/v/v60pbrbrt.css';
import '../../css/g/gip-qcfja.css';
import '../../css/g/gagi9pa9w.css';
import '../../css/m/mq8lb5axb.css';
import '../../css/h/h_g8-vbdr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="f7wlwbcoj"/><path class="v60pbrbrt"/><path class="gip-qcfja"/><path class="gagi9pa9w"/><path class="mq8lb5axb"/><path class="h_g8-vbdr"/></g>`,
		"fallback": "icon-park:lip-tattoo",
	});
}

export default Component;
