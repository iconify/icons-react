import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tnatn192d.css';
import '../../css/d/dn7qjhb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tnatn192d"/><path clip-rule="evenodd" class="dn7qjhb5o"/></g>`,
		"fallback": "nrk:microphone",
	});
}

export default Component;
