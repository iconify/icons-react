import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u9qz1eb7n.css';
import '../../css/h/huw3ambik.css';
import '../../css/o/og437mbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u9qz1eb7n"/><path class="huw3ambik wm-shadow"/><path class="og437mbap"/></g>`,
		"fallback": "withicons:panel-top-engrave",
	});
}

export default Component;
