import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h1q6c4tla.css';
import '../../css/g/gb4ci7bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h1q6c4tla"/><path class="gb4ci7bcz"/></g>`,
		"fallback": "thesvg:lm-studio",
	});
}

export default Component;
