import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cn2z6fbqs.css';
import '../../css/q/q_b4c7bhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cn2z6fbqs"/><path class="q_b4c7bhb"/></g>`,
		"fallback": "reicon:paw-duotone",
	});
}

export default Component;
