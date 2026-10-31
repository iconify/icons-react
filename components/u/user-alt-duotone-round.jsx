import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m_526vbpb.css';
import '../../css/w/w85-lohkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m_526vbpb"/><path class="w85-lohkm"/></g>`,
		"fallback": "coolicons:user-alt-duotone-round",
	});
}

export default Component;
