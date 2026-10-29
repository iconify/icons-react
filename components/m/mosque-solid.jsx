import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/of04c5bbp.css';
import '../../css/r/r3ctk0beg.css';
import '../../css/z/z0lup6bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="of04c5bbp"/><path class="r3ctk0beg wm-a"/><path class="wm-s z0lup6bkn"/></g>`,
		"fallback": "withicons:mosque-solid",
	});
}

export default Component;
