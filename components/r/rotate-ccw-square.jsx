import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ao5y67b3i.css';
import '../../css/f/fhnhiobho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ao5y67b3i"/><path class="fhnhiobho"/></g>`,
		"fallback": "vadivam:rotate-ccw-square",
	});
}

export default Component;
