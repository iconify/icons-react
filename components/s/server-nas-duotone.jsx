import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4s803bjf.css';
import '../../css/v/voyrhpbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t4s803bjf"/><path class="voyrhpbrp"/></g>`,
		"fallback": "lucide-extended:server-nas-duotone",
	});
}

export default Component;
