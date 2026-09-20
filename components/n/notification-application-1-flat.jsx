import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sa2ty-yxb.css';
import '../../css/b/b-8s1tbtz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sa2ty-yxb"/><path class="b-8s1tbtz"/></g>`,
		"fallback": "streamline-color:notification-application-1-flat",
	});
}

export default Component;
