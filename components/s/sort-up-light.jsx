import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/k_t6vibnj.css';
import '../../css/l/l74h3ibbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="k_t6vibnj"/><path class="l74h3ibbm"/></g>`,
		"fallback": "lets-icons:sort-up-light",
	});
}

export default Component;
