import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eq6gdlb3o.css';
import '../../css/y/ytmfyjvyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eq6gdlb3o"/><path class="ytmfyjvyp"/></g>`,
		"fallback": "reicon:link-broken-duotone",
	});
}

export default Component;
