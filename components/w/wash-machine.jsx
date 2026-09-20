import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dc9lci3fy.css';
import '../../css/h/hn2o_9mai.css';
import '../../css/w/wko14xbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dc9lci3fy"/><path class="hn2o_9mai"/><path class="wko14xbwz"/></g>`,
		"fallback": "tabler:wash-machine",
	});
}

export default Component;
