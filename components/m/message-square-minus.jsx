import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk4qf0b7g.css';
import '../../css/r/r-45tw1ar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk4qf0b7g"/><path class="r-45tw1ar"/>`,
		"fallback": "bx:message-square-minus",
	});
}

export default Component;
