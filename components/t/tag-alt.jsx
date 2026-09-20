import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_tumd44u.css';
import '../../css/y/yi-ccybwq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h_tumd44u"/><path class="yi-ccybwq"/></g>`,
		"fallback": "streamline-flex-color:tag-alt",
	});
}

export default Component;
