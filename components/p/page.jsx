import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/m/ms0ewhbdp.css';
import '../../css/e/evh35gd0k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="r8cyu3bwz"/><path class="ms0ewhbdp"/><path class="evh35gd0k"/></g>`,
		"fallback": "icon-park:page",
	});
}

export default Component;
