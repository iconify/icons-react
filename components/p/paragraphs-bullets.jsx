import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l78xvobdd.css';
import '../../css/o/os8r2jqqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l78xvobdd"/><path class="os8r2jqqm"/></g>`,
		"fallback": "streamline-freehand:paragraphs-bullets",
	});
}

export default Component;
