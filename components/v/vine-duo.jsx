import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7vsvob7h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v1u1iuzxy.css';
import '../../css/a/a5dkqgbtz.css';
import '../../css/d/deea3zlhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary x7vsvob7h"/><g class="dt0cm9dhy primary"><path class="v1u1iuzxy"/><path class="a5dkqgbtz"/><path class="deea3zlhh"/></g>`,
		"fallback": "iconaut:vine-duo",
	});
}

export default Component;
