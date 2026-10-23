import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tkgv32aug.css';
import '../../css/a/a4p76-44s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tkgv32aug"/><path class="a4p76-44s"/></g>`,
		"fallback": "vadivam:server-crash",
	});
}

export default Component;
