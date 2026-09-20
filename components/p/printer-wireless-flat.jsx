import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o6sp72wbs.css';
import '../../css/v/vj6ez_blu.css';
import '../../css/a/alvhr_bfs.css';
import '../../css/r/rrpaa_79c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o6sp72wbs"/><path class="vj6ez_blu"/><path clip-rule="evenodd" class="alvhr_bfs"/><path class="rrpaa_79c"/></g>`,
		"fallback": "streamline-flex-color:printer-wireless-flat",
	});
}

export default Component;
