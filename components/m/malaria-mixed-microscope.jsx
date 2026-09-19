import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/ziuoucl8y.css';
import '../../css/h/hxfqxacle.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ziuoucl8y"/><path clip-rule="evenodd" class="hxfqxacle"/></g>`,
		"fallback": "healthicons:malaria-mixed-microscope",
	});
}

export default Component;
