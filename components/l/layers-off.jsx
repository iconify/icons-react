import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cb8kbdbns.css';
import '../../css/h/hwero2uel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cb8kbdbns"/><path class="hwero2uel"/></g>`,
		"fallback": "tabler:layers-off",
	});
}

export default Component;
