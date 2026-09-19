import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/je8i6b16f.css';
import '../../css/d/d3txjvobg.css';
import '../../css/u/uvgp29bxq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="je8i6b16f"/><path class="d3txjvobg"/><path class="uvgp29bxq"/></g>`,
		"fallback": "et:layers",
	});
}

export default Component;
