import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/omfwcqb7f.css';
import '../../css/j/jdjv04bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="omfwcqb7f"/><path class="jdjv04bbq"/></g>`,
		"fallback": "vadivam:search-check",
	});
}

export default Component;
