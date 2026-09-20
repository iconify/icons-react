import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/g3dntgbhf.css';
import '../../css/q/qaekjjbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="g3dntgbhf"/><path class="qaekjjbhb"/></g>`,
		"fallback": "streamline-sharp-color:page-break",
	});
}

export default Component;
