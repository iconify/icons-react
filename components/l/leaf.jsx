import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/pr758cc-x.css';
import '../../css/y/yv3yf5d7w.css';
import '../../css/t/tqpuzm_se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="pr758cc-x"/><path class="yv3yf5d7w"/><path class="tqpuzm_se"/></g>`,
		"fallback": "streamline-sharp-color:leaf",
	});
}

export default Component;
