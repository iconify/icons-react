import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s438j093n.css';
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
		"content": `<g class="s438j093n"><path class="h1q6c4tla"/><path class="gb4ci7bcz"/></g>`,
		"fallback": "thesvg-color:lm-studio",
	});
}

export default Component;
