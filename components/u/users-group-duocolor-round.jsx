import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxz1iaboq.css';
import '../../css/u/uq9jp9bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jxz1iaboq"/><path class="uq9jp9bdl"/></g>`,
		"fallback": "coolicons:users-group-duocolor-round",
	});
}

export default Component;
