import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ox1bypbec.css';
import '../../css/z/z_z_qlbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ox1bypbec"/><path class="z_z_qlbwy"/></g>`,
		"fallback": "withicons:rolling-pin-sketch",
	});
}

export default Component;
