import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hs3g8e_uk.css';
import '../../css/k/karkvxbcj.css';
import '../../css/n/n6wegsbky.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hs3g8e_uk"/><path class="karkvxbcj"/><path class="n6wegsbky"/></g>`,
		"fallback": "healthicons:skin-cancer2x-outline",
	});
}

export default Component;
