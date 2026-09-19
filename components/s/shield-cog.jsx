import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bmnkz6b9o.css';
import '../../css/x/xfkheg9fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bmnkz6b9o"/><path class="xfkheg9fs"/></g>`,
		"fallback": "hugeicons:shield-cog",
	});
}

export default Component;
