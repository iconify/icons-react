import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sgv587bws.css';
import '../../css/f/f9_9r-bbf.css';
import '../../css/h/hkyxqm1oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="sgv587bws"/><path class="f9_9r-bbf"/><path class="hkyxqm1oe"/></g>`,
		"fallback": "iconamoon:neutral-face",
	});
}

export default Component;
