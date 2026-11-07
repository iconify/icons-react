import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v6pzvpfzc.css';
import '../../css/d/dj0pe0jsy.css';
import '../../css/n/n2fu-sj-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v6pzvpfzc"/><path class="dj0pe0jsy"/><path class="n2fu-sj-y"/></g>`,
		"fallback": "solar:meditation-round-line-duotone",
	});
}

export default Component;
