import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gnr4aibbh.css';
import '../../css/h/he8qmebam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gnr4aibbh"/><circle class="he8qmebam"/></g>`,
		"fallback": "struq:tag",
	});
}

export default Component;
