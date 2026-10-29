import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m23kekk4l.css';
import '../../css/a/a29zwjb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m23kekk4l"/><path class="a29zwjb0v wm-s"/></g>`,
		"fallback": "withicons:phone-off-solid",
	});
}

export default Component;
