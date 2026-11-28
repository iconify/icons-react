import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smzpc2bye.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ylhff9aue.css';
import '../../css/b/bp7gyqpkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary smzpc2bye"/><g class="dt0cm9dhy primary"><circle class="ylhff9aue"/><path class="bp7gyqpkx"/></g>`,
		"fallback": "iconaut:sun-duo",
	});
}

export default Component;
