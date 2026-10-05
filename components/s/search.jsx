import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/apsq3_uht.css';
import '../../css/e/efj60ojqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="apsq3_uht"/><path class="efj60ojqu"/></g>`,
		"fallback": "matita:search",
	});
}

export default Component;
