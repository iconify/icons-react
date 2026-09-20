import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rzn52ac6g.css';
import '../../css/v/vzl7_0buo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rzn52ac6g"/><path class="vzl7_0buo"/></g>`,
		"fallback": "streamline-color:shrink-horizontal-1-flat",
	});
}

export default Component;
