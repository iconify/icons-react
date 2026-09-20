import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5--hccnw.css';
import '../../css/t/ts4_tacxb.css';
import '../../css/q/qy-x2bcjr.css';
import '../../css/y/ynhzcoben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y5--hccnw"/><path class="ts4_tacxb"/><circle class="qy-x2bcjr"/><rect class="ynhzcoben"/></g>`,
		"fallback": "lets-icons:user-box-duotone-line",
	});
}

export default Component;
