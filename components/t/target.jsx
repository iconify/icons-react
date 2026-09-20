import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gckcm1bnu.css';
import '../../css/t/tjppo_1ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gckcm1bnu"/><path clip-rule="evenodd" class="tjppo_1ks"/></g>`,
		"fallback": "reicon:target",
	});
}

export default Component;
