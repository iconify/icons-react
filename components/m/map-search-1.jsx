import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utg2slbjo.css';
import '../../css/m/m2ajm2_il.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="utg2slbjo"/><path class="m2ajm2_il"/></g>`,
		"fallback": "tdesign:map-search-1",
	});
}

export default Component;
