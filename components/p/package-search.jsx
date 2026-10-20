import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n0yj8wb8q.css';
import '../../css/k/k4p3_pn2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n0yj8wb8q"/><path class="k4p3_pn2r"/></g>`,
		"fallback": "vadivam:package-search",
	});
}

export default Component;
