import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bqiva3mde.css';
import '../../css/w/wxrca-6dl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bqiva3mde"/><path class="wxrca-6dl"/></g>`,
		"fallback": "streamline-color:screen-1-flat",
	});
}

export default Component;
