import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzdvjibtc.css';
import '../../css/t/tqjbjmj2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bzdvjibtc"/><path class="tqjbjmj2t"/></g>`,
		"fallback": "reicon:pip-duotone",
	});
}

export default Component;
