import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/st6v4ugxp.css';
import '../../css/t/tlae1_1dl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="st6v4ugxp"/><path class="tlae1_1dl"/></g>`,
		"fallback": "streamline-color:open-umbrella-flat",
	});
}

export default Component;
