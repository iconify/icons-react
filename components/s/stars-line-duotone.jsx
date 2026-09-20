import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s1xptwehe.css';
import '../../css/b/b72vzmblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s1xptwehe"/><path class="b72vzmblc"/></g>`,
		"fallback": "solar:stars-line-duotone",
	});
}

export default Component;
