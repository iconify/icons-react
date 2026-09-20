import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7bh111wr.css';
import '../../css/m/mboml5bjo.css';
import '../../css/p/pltokbbut.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l7bh111wr"/><path class="mboml5bjo"/><path class="pltokbbut"/></g>`,
		"fallback": "jam:viber-square",
	});
}

export default Component;
