import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ndmrztbsq.css';
import '../../css/a/a96k7rbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ndmrztbsq"/><circle class="a96k7rbus"/></g>`,
		"fallback": "akar-icons:truck",
	});
}

export default Component;
