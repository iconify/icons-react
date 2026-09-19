import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jlkh9zbwk.css';
import '../../css/o/oqa_tmuef.css';
import '../../css/c/c-oeh2kvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jlkh9zbwk"/><path class="oqa_tmuef"/><path clip-rule="evenodd" class="c-oeh2kvd"/></g>`,
		"fallback": "healthicons:virus-alt-outline-24px",
	});
}

export default Component;
