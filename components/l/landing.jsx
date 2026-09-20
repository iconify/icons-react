import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/hj1x9z2yv.css';
import '../../css/p/pdmhq57oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="hj1x9z2yv"/><path class="pdmhq57oj"/></g>`,
		"fallback": "streamline-sharp-color:landing",
	});
}

export default Component;
