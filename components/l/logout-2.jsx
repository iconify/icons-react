import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/kbscrrbji.css';
import '../../css/j/j-urk1b-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="kbscrrbji"/><path class="j-urk1b-p"/></g>`,
		"fallback": "streamline-sharp-color:logout-2",
	});
}

export default Component;
