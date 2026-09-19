import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nzeykrbxd.css';
import '../../css/n/n2ff_ff7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nzeykrbxd"/><path clip-rule="evenodd" class="n2ff_ff7k"/></g>`,
		"fallback": "griddy-icons:pills-alt-01",
	});
}

export default Component;
