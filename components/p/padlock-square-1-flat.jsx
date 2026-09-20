import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5-anxrtt.css';
import '../../css/n/n3dsnsnul.css';
import '../../css/b/bunov33is.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y5-anxrtt"/><path class="n3dsnsnul"/><path class="bunov33is"/></g>`,
		"fallback": "streamline-color:padlock-square-1-flat",
	});
}

export default Component;
