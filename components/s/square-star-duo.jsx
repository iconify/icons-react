import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n12fu4gut.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/s/sunn0ibms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n12fu4gut secondary"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="sunn0ibms"/></g>`,
		"fallback": "iconaut:square-star-duo",
	});
}

export default Component;
