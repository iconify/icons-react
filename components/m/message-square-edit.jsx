import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk4qf0b7g.css';
import '../../css/h/hyhc474-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk4qf0b7g"/><path class="hyhc474-o"/>`,
		"fallback": "bx:message-square-edit",
	});
}

export default Component;
