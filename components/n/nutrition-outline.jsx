import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e9dlq0bzy.css';
import '../../css/i/iy41s3vjl.css';
import '../../css/g/g8w6-jmaw.css';
import '../../css/q/qpbo7bcqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e9dlq0bzy"/><path class="iy41s3vjl"/><path clip-rule="evenodd" class="g8w6-jmaw"/><path class="qpbo7bcqv"/></g>`,
		"fallback": "healthicons:nutrition-outline",
	});
}

export default Component;
