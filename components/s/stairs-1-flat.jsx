import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/ny-butbhs.css';
import '../../css/e/e4pb4qbvu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ny-butbhs"/><path class="e4pb4qbvu"/></g>`,
		"fallback": "streamline-flex-color:stairs-1-flat",
	});
}

export default Component;
