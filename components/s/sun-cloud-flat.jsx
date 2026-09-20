import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3355tbvl.css';
import '../../css/n/ncj2oac0n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c3355tbvl"/><path class="ncj2oac0n"/></g>`,
		"fallback": "streamline-color:sun-cloud-flat",
	});
}

export default Component;
