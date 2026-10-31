import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ihi4f1z4h.css';
import '../../css/z/zw3vfkb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ihi4f1z4h"/><path class="zw3vfkb1r"/></g>`,
		"fallback": "coolicons:replace-duotone-round",
	});
}

export default Component;
