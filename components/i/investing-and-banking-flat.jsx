import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k10n1bq7g.css';
import '../../css/m/mpbwtbn0x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k10n1bq7g"/><path class="mpbwtbn0x"/></g>`,
		"fallback": "streamline-flex-color:investing-and-banking-flat",
	});
}

export default Component;
