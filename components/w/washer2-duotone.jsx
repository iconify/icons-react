import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sy6d7r2rm.css';
import '../../css/n/nltr694jb.css';
import '../../css/m/mdoeygd0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sy6d7r2rm"/><path class="nltr694jb"/><path clip-rule="evenodd" class="mdoeygd0h"/></g>`,
		"fallback": "reicon:washer2-duotone",
	});
}

export default Component;
