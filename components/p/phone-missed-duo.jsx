import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exv0g4bou.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w64ay2bqp.css';
import '../../css/i/iv5_2-1_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exv0g4bou secondary"/><g class="dt0cm9dhy primary"><path class="w64ay2bqp"/><path class="iv5_2-1_r"/></g>`,
		"fallback": "iconaut:phone-missed-duo",
	});
}

export default Component;
