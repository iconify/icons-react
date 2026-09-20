import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hdejd3gky.css';
import '../../css/u/ufz6is2fn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hdejd3gky"/><path clip-rule="evenodd" class="ufz6is2fn"/></g>`,
		"fallback": "streamline-color:wallet-purse-flat",
	});
}

export default Component;
