import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uzasq0bfy.css';
import '../../css/i/ihz715blo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uzasq0bfy"/><path class="ihz715blo"/></g>`,
		"fallback": "withicons:spider-web-duo",
	});
}

export default Component;
