import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dk_5p9bho.css';
import '../../css/g/goh_92aak.css';
import '../../css/a/akyg8sblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dk_5p9bho"/><path clip-rule="evenodd" class="goh_92aak"/><path clip-rule="evenodd" class="akyg8sblr"/></g>`,
		"fallback": "reicon:translate2-duotone",
	});
}

export default Component;
