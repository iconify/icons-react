import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mjo5zwbap.css';
import '../../css/b/bddvczbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mjo5zwbap"/><path class="bddvczbll"/></g>`,
		"fallback": "coolicons:radio-checked-duotone-round",
	});
}

export default Component;
