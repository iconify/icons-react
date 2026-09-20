import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gvlzddbzs.css';
import '../../css/b/b8jk2lh-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gvlzddbzs"/><path class="b8jk2lh-d"/></g>`,
		"fallback": "streamline-sharp-color:script-1-flat",
	});
}

export default Component;
