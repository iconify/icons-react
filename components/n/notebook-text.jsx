import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c48u0eb2f.css';
import '../../css/f/fe6p-1bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c48u0eb2f"/><path class="fe6p-1bym"/></g>`,
		"fallback": "vadivam:notebook-text",
	});
}

export default Component;
