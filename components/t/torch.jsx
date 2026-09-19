import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr36qhbyi.css';
import '../../css/d/d8wdhlbaq.css';
import '../../css/p/pn5cztbkd.css';
import '../../css/r/r0qx3-b8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tr36qhbyi"><path class="d8wdhlbaq"/><path class="pn5cztbkd"/><path class="r0qx3-b8s"/></g>`,
		"fallback": "icon-park:torch",
	});
}

export default Component;
