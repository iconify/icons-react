import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d1i2iw-bc.css';
import '../../css/c/c5_8_gb4c.css';
import '../../css/s/s8ub28b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d1i2iw-bc"/><path class="c5_8_gb4c"/><path class="s8ub28b-i"/></g>`,
		"fallback": "iconaut:list-collapse",
	});
}

export default Component;
