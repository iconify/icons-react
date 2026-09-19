import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fh6hfufok.css';
import '../../css/u/uofr90znr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fh6hfufok"/><path class="uofr90znr"/></g>`,
		"fallback": "akar-icons:thumbs-up",
	});
}

export default Component;
