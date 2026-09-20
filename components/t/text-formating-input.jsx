import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ac5ljzjba.css';
import '../../css/o/o1gmgzjmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ac5ljzjba"/><path class="o1gmgzjmg"/></g>`,
		"fallback": "streamline-freehand:text-formating-input",
	});
}

export default Component;
