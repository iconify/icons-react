import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aalf-lbck.css';
import '../../css/i/iuo8d7bbn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aalf-lbck"/><path class="iuo8d7bbn"/></g>`,
		"fallback": "streamline-flex-color:iphone-flat",
	});
}

export default Component;
