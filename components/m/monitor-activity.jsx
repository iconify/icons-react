import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ll3v63b7s.css';
import '../../css/e/euvd9gb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ll3v63b7s"/><path class="euvd9gb_b"/></g>`,
		"fallback": "vadivam:monitor-activity",
	});
}

export default Component;
