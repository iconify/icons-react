import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kz67v9bui.css';
import '../../css/c/clvdt3btv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kz67v9bui"/><path class="clvdt3btv"/></g>`,
		"fallback": "pepicons:t-shirt",
	});
}

export default Component;
