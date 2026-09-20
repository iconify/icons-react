import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2olt1beo.css';
import '../../css/d/dab4yko7u.css';
import '../../css/f/fkqe7rzrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m2olt1beo"/><path clip-rule="evenodd" class="dab4yko7u"/><path class="fkqe7rzrq"/></g>`,
		"fallback": "reicon:server-square-duotone",
	});
}

export default Component;
