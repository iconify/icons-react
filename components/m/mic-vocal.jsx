import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o5yd5cb-p.css';
import '../../css/l/li9w7htoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o5yd5cb-p"/><path class="li9w7htoz"/></g>`,
		"fallback": "vadivam:mic-vocal",
	});
}

export default Component;
