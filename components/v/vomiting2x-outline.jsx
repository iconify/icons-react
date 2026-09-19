import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3nuceysm.css';
import '../../css/n/na_e5mbnk.css';
import '../../css/p/poz5v4vlw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r3nuceysm"/><path class="na_e5mbnk"/><path clip-rule="evenodd" class="poz5v4vlw"/></g>`,
		"fallback": "healthicons:vomiting2x-outline",
	});
}

export default Component;
