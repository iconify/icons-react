import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ckxy5gb-z.css';
import '../../css/j/j-_3a7bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ckxy5gb-z"/><path class="j-_3a7bqs"/></g>`,
		"fallback": "vadivam:redo-2",
	});
}

export default Component;
