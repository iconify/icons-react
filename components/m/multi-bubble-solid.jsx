import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/axvh5kbqa.css';
import '../../css/r/rfp4-cbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="axvh5kbqa"/><path class="rfp4-cbyf"/></g>`,
		"fallback": "iconoir:multi-bubble-solid",
	});
}

export default Component;
