import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b3ue-ubdv.css';
import '../../css/j/j4513xbuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b3ue-ubdv"/><path class="j4513xbuh"/></g>`,
		"fallback": "vadivam:square-terminal",
	});
}

export default Component;
