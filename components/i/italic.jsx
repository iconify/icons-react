import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sl57sbcqw.css';
import '../../css/t/tf9x9gbzg.css';
import '../../css/u/u5tnh3nzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sl57sbcqw"/><path class="tf9x9gbzg"/><path class="u5tnh3nzq"/></g>`,
		"fallback": "iconaut:italic",
	});
}

export default Component;
