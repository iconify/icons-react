import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p5q7ejjeb.css';
import '../../css/n/n8bgkq-wu.css';
import '../../css/i/i5cakcclp.css';
import '../../css/l/l69d02b_x.css';
import '../../css/d/dlnj7q4lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p5q7ejjeb"/><path class="n8bgkq-wu wm-k"/><path class="i5cakcclp wm-s"/><path class="l69d02b_x wm-k"/><path class="dlnj7q4lj wm-s"/></g>`,
		"fallback": "withicons:user-heart-sketch",
	});
}

export default Component;
