import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rqsneub9z.css';
import '../../css/r/r8z4kcccr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rqsneub9z"/><path class="r8z4kcccr"/></g>`,
		"fallback": "streamline-plump-color:page-setting-flat",
	});
}

export default Component;
