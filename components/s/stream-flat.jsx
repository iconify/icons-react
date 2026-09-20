import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/agzjfdcmr.css';
import '../../css/c/cfiqnvjze.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="agzjfdcmr"/><path class="cfiqnvjze"/></g>`,
		"fallback": "streamline-color:stream-flat",
	});
}

export default Component;
