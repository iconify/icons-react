import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpt1mobpl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t7kmbybpb.css';
import '../../css/o/o4zir7b9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpt1mobpl secondary"/><g class="dt0cm9dhy primary"><path class="t7kmbybpb"/><path class="o4zir7b9h"/></g>`,
		"fallback": "iconaut:toggle-right-duo",
	});
}

export default Component;
