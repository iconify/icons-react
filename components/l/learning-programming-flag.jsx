import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/ptam-mx9y.css';
import '../../css/x/x2kns8tro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ptam-mx9y"/><path class="x2kns8tro"/></g>`,
		"fallback": "streamline-freehand:learning-programming-flag",
	});
}

export default Component;
