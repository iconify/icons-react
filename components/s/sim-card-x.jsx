import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fde37bbhy.css';
import '../../css/g/gor42-b7e.css';
import '../../css/v/vrb4d8bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fde37bbhy"/><path class="gor42-b7e"/><path class="vrb4d8bnb"/></g>`,
		"fallback": "andrsrxn:sim-card-x",
	});
}

export default Component;
