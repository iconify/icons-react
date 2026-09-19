import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6b-hwq9k.css';
import '../../css/d/d0yx4gbtw.css';
import '../../css/v/vl_70lije.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z6b-hwq9k"/><path clip-rule="evenodd" class="d0yx4gbtw"/><path class="vl_70lije"/></g>`,
		"fallback": "healthicons:rdt-result-positive",
	});
}

export default Component;
