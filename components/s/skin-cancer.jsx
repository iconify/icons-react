import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v4c1i1c7k.css';
import '../../css/e/euzxfln7c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v4c1i1c7k"/><path class="euzxfln7c"/></g>`,
		"fallback": "healthicons:skin-cancer",
	});
}

export default Component;
