import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtfylvbjo.css';
import '../../css/w/wben25v4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dtfylvbjo"/><path class="wben25v4g"/></g>`,
		"fallback": "mage:refresh-reverse",
	});
}

export default Component;
