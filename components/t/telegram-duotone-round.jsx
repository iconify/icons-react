import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0zf_k2da.css';
import '../../css/m/mldb561ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p0zf_k2da"/><path class="mldb561ka"/></g>`,
		"fallback": "coolicons:telegram-duotone-round",
	});
}

export default Component;
