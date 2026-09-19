import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pp460t85i.css';
import '../../css/p/pdpz416em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pp460t85i"/><path class="pdpz416em"/></g>`,
		"fallback": "ginetex:only-oxygen-bleach-allowed",
	});
}

export default Component;
