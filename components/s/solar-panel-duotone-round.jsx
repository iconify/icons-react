import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2c0cbb1t.css';
import '../../css/c/co-zfexns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b2c0cbb1t"/><path class="co-zfexns"/></g>`,
		"fallback": "coolicons:solar-panel-duotone-round",
	});
}

export default Component;
