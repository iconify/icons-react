import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eugnk6b2t.css';
import '../../css/y/ysl_j-bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eugnk6b2t"/><path class="ysl_j-bne"/></g>`,
		"fallback": "coolicons:mail-open-duotone-round",
	});
}

export default Component;
