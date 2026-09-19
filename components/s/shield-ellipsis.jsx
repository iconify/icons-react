import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bmnkz6b9o.css';
import '../../css/b/beul77zfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bmnkz6b9o"/><path class="beul77zfu"/></g>`,
		"fallback": "hugeicons:shield-ellipsis",
	});
}

export default Component;
