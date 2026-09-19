import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ee9q2291t.css';
import '../../css/s/sgd0ieb1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ee9q2291t"/><path clip-rule="evenodd" class="sgd0ieb1h"/></g>`,
		"fallback": "healthicons:rdt-result-no-test-outline",
	});
}

export default Component;
