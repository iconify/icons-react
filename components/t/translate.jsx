import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bs4jbobod.css';
import '../../css/x/xhon0gxle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bs4jbobod"/><path class="xhon0gxle"/></g>`,
		"fallback": "struq:translate",
	});
}

export default Component;
