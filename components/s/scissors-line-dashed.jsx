import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wszr8nb0z.css';
import '../../css/e/egxneybyk.css';
import '../../css/q/ql-n_lccz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wszr8nb0z"/><path class="egxneybyk"/><path class="ql-n_lccz"/></g>`,
		"fallback": "vadivam:scissors-line-dashed",
	});
}

export default Component;
