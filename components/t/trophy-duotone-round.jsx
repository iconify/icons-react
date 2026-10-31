import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lkg3a5auc.css';
import '../../css/m/maurpwbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lkg3a5auc"/><path class="maurpwbkp"/></g>`,
		"fallback": "coolicons:trophy-duotone-round",
	});
}

export default Component;
