import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v6k7bebpa.css';
import '../../css/s/s8ukj0v8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v6k7bebpa"/><path class="s8ukj0v8x"/></g>`,
		"fallback": "vadivam:receipt-turkish-lira",
	});
}

export default Component;
