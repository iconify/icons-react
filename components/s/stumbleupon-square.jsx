import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f5-brbv1m.css';
import '../../css/o/ozht5fb7m.css';
import '../../css/p/pltokbbut.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f5-brbv1m"/><path class="ozht5fb7m"/><path class="pltokbbut"/></g>`,
		"fallback": "jam:stumbleupon-square",
	});
}

export default Component;
