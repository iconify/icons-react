import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wzkl3l1di.css';
import '../../css/o/osc21kbyx.css';
import '../../css/a/ajx95yo6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wzkl3l1di"/><path class="osc21kbyx"/><path class="ajx95yo6o"/></g>`,
		"fallback": "tabler:switch-2",
	});
}

export default Component;
