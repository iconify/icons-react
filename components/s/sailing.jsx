import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/f/f16ta9bil.css';
import '../../css/d/djo_6or7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="f16ta9bil"/><path class="djo_6or7z"/></g>`,
		"fallback": "icon-park-outline:sailing",
	});
}

export default Component;
