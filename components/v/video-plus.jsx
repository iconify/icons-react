import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i-ya2_b1u.css';
import '../../css/v/voojxubbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i-ya2_b1u"/><path class="voojxubbp"/></g>`,
		"fallback": "mage:video-plus",
	});
}

export default Component;
