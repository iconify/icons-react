import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aq5g_8rsc.css';
import '../../css/k/kjdriabau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aq5g_8rsc"/><path class="kjdriabau"/></g>`,
		"fallback": "streamline-ultimate:paper-write",
	});
}

export default Component;
