import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/voojxubbp.css';
import '../../css/j/j-ha059fn.css';
import '../../css/d/d7ghspp-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="voojxubbp"/><path class="j-ha059fn"/><path class="d7ghspp-o"/></g>`,
		"fallback": "mage:video-question-mark",
	});
}

export default Component;
