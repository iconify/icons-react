import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xy8mi4e0x.css';
import '../../css/b/bdniwqb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xy8mi4e0x"/><path class="bdniwqb0w"/></g>`,
		"fallback": "coolicons:motorbike-duotone-round",
	});
}

export default Component;
