import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g9d2qo-1x.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/e/eefbnzrzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g9d2qo-1x wm-k"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="eefbnzrzq wm-a"/></g>`,
		"fallback": "withicons:square-function-engrave",
	});
}

export default Component;
