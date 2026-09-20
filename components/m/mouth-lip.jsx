import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_93jexjc.css';
import '../../css/f/fcym2rb9n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q_93jexjc"/><path class="fcym2rb9n"/></g>`,
		"fallback": "streamline-color:mouth-lip",
	});
}

export default Component;
