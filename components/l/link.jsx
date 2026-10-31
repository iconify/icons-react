import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f-yqczbsf.css';
import '../../css/d/dofcgcoov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f-yqczbsf"/><path class="dofcgcoov"/></g>`,
		"fallback": "struq:link",
	});
}

export default Component;
