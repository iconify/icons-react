import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rlcdwrh5p.css';
import '../../css/a/a_ayp4bfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rlcdwrh5p"/><path class="a_ayp4bfe"/></g>`,
		"fallback": "streamline-freehand:vectors-pen-add-1",
	});
}

export default Component;
