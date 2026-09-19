import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jpwpgsbci.css';
import '../../css/q/qa9g_cbfy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="jpwpgsbci"/><path class="qa9g_cbfy"/></g>`,
		"fallback": "cryptocurrency-color:ric",
	});
}

export default Component;
