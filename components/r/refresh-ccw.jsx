import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ejj3irfkz.css';
import '../../css/z/z4p_rcbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ejj3irfkz"/><path class="z4p_rcbqa"/></g>`,
		"fallback": "feather:refresh-ccw",
	});
}

export default Component;
