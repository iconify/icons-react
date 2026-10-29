import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z_ml12bgo.css';
import '../../css/m/m23x9cwpi.css';
import '../../css/e/exiu9eq2v.css';
import '../../css/o/ovhif5-5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="z_ml12bgo"/><path class="m23x9cwpi wm-a"/><path class="exiu9eq2v wm-k"/><path class="ovhif5-5j wm-a"/></g>`,
		"fallback": "withicons:medal-sketch",
	});
}

export default Component;
