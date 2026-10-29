import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cprrueaqh.css';
import '../../css/j/j8s564w0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cprrueaqh"/><path class="j8s564w0m"/></g>`,
		"fallback": "withicons:layout-grid-sketch",
	});
}

export default Component;
