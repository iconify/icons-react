import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p1tf6fbex.css';
import '../../css/n/nvmfzubki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p1tf6fbex"/><path class="nvmfzubki"/></g>`,
		"fallback": "reicon:login4",
	});
}

export default Component;
