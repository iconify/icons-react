import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aq4fvy5jc.css';
import '../../css/k/kgv2unb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aq4fvy5jc"/><path class="kgv2unb9x"/></g>`,
		"fallback": "vadivam:square-arrow-down-left",
	});
}

export default Component;
