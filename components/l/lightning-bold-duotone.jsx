import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um1bj7bbr.css';
import '../../css/g/gph3mkbfr.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/d_5l10bed.css';
import '../../css/n/n4ivllbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="um1bj7bbr"/><path class="gph3mkbfr"/><g class="xtpeb-edw"><path class="d_5l10bed"/><path class="n4ivllbah"/></g>`,
		"fallback": "solar:lightning-bold-duotone",
	});
}

export default Component;
