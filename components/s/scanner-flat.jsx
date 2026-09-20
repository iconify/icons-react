import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w6h2tbjou.css';
import '../../css/q/q2xgyhzef.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w6h2tbjou"/><path class="q2xgyhzef"/></g>`,
		"fallback": "streamline-color:scanner-flat",
	});
}

export default Component;
