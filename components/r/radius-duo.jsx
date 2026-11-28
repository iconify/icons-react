import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y199uvusw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d6-xq1bxx.css';
import '../../css/d/d1ej-tbru.css';
import '../../css/f/flaug2yxl.css';
import '../../css/i/injexccye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary y199uvusw"/><g class="dt0cm9dhy primary"><path class="d6-xq1bxx"/><path class="d1ej-tbru"/><path class="flaug2yxl"/><path class="injexccye"/></g>`,
		"fallback": "iconaut:radius-duo",
	});
}

export default Component;
