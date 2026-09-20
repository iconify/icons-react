import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dp7-xnt-f.css';
import '../../css/b/bveiwsbms.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dp7-xnt-f"/><path class="bveiwsbms"/></g>`,
		"fallback": "streamline-flex-color:share-link-flat",
	});
}

export default Component;
