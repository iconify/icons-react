import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n889r9bwi.css';
import '../../css/j/juiylaccl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n889r9bwi"/><path class="juiylaccl"/></g>`,
		"fallback": "gg:patreon",
	});
}

export default Component;
