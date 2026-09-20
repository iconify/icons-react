import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oipxhhb6r.css';
import '../../css/v/vayfcxbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oipxhhb6r"/><path class="vayfcxbfz"/></g>`,
		"fallback": "streamline-freehand-color:stairs-ascend",
	});
}

export default Component;
