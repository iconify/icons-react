import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u-urx4b4c.css';
import '../../css/y/y-upff1pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="u-urx4b4c"/><path class="wm-a y-upff1pg"/></g>`,
		"fallback": "withicons:milk-solid",
	});
}

export default Component;
