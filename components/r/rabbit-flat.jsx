import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vh5c3ub1w.css';
import '../../css/u/u-w83budx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vh5c3ub1w"/><path class="u-w83budx"/></g>`,
		"fallback": "streamline-sharp-color:rabbit-flat",
	});
}

export default Component;
