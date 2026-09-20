import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fn-0-w_or.css';
import '../../css/j/j09_3_vgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fn-0-w_or"/><path class="j09_3_vgg"/></g>`,
		"fallback": "tabler:ping-pong",
	});
}

export default Component;
