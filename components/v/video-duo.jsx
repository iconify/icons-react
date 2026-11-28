import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hij-t_s7i.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t7hlcbb-q.css';
import '../../css/a/a_sewubtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hij-t_s7i secondary"/><g class="dt0cm9dhy primary"><path class="t7hlcbb-q"/><path class="a_sewubtv"/></g>`,
		"fallback": "iconaut:video-duo",
	});
}

export default Component;
