import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fs92sx3dn.css';
import '../../css/k/kfk4bmo5z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fs92sx3dn"/><path class="kfk4bmo5z"/></g>`,
		"fallback": "streamline-color:screen-2-flat",
	});
}

export default Component;
