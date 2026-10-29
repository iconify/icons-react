import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nn3_qbmiu.css';
import '../../css/g/g-q028ykq.css';
import '../../css/k/k2m212bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nn3_qbmiu"/><path class="g-q028ykq wm-shadow"/><path class="k2m212bgo"/></g>`,
		"fallback": "withicons:star-engrave",
	});
}

export default Component;
