import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/khn241bad.css';
import '../../css/n/npa4rgbjd.css';
import '../../css/l/ljcz9bcpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="khn241bad"/><path class="npa4rgbjd"/><path class="ljcz9bcpj wm-s"/></g>`,
		"fallback": "withicons:user-pen-solid",
	});
}

export default Component;
