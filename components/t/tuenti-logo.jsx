import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/p05fx7dxw.css';
import '../../css/n/nth_bib9h.css';
import '../../css/j/j7su0kpmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="p05fx7dxw"/><path class="nth_bib9h"/><path class="j7su0kpmk"/></g>`,
		"fallback": "streamline-logos:tuenti-logo",
	});
}

export default Component;
