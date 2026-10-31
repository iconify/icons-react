import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v46c5sbaj.css';
import '../../css/i/im0pgac9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v46c5sbaj"/><path class="im0pgac9u"/></g>`,
		"fallback": "coolicons:shield-close-duotone-round",
	});
}

export default Component;
