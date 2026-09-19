import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tewo13b5l.css';
import '../../css/l/l1rhgb7ns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tewo13b5l"/><path class="l1rhgb7ns"/></g>`,
		"fallback": "healthicons:oesophagus-cancer2x-outline",
	});
}

export default Component;
