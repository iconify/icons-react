import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/md1698vtm.css';
import '../../css/q/qg4ud0b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="md1698vtm"/><path class="qg4ud0b0f"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-start-percent-sharp",
	});
}

export default Component;
