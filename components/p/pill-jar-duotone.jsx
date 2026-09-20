import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/poex70sae.css';
import '../../css/i/i2jxr-95a.css';
import '../../css/u/uw1l7ac0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="poex70sae"/><path class="i2jxr-95a"/><path clip-rule="evenodd" class="uw1l7ac0q"/></g>`,
		"fallback": "reicon:pill-jar-duotone",
	});
}

export default Component;
