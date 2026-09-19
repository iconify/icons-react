import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eq44zu3zv.css';
import '../../css/k/k2jkv656h.css';
import '../../css/f/f2vk32anf.css';
import '../../css/h/hfinebcgv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eq44zu3zv"/><path class="k2jkv656h"/><path class="f2vk32anf"/><path class="hfinebcgv"/></g>`,
		"fallback": "icon-park:shopping-mall",
	});
}

export default Component;
