import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/w430v2boa.css';
import '../../css/t/t1b4jiafv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="w430v2boa"/><path class="t1b4jiafv"/></g>`,
		"fallback": "streamline-sharp-color:recycle-1",
	});
}

export default Component;
