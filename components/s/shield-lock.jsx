import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/b/b08rucc_a.css';
import '../../css/p/p2yzh8egz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j2vbli9go"/><path class="b08rucc_a"/><path class="p2yzh8egz"/></g>`,
		"fallback": "iconaut:shield-lock",
	});
}

export default Component;
