import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qbj1csoqg.css';
import '../../css/z/z8477pk5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qbj1csoqg"/><path class="z8477pk5j"/></g>`,
		"fallback": "streamline-freehand:phone-booth",
	});
}

export default Component;
