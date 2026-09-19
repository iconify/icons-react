import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qzqh5nesu.css';
import '../../css/m/m6daittia.css';
import '../../css/n/n0h4l1b9d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qzqh5nesu"/><path class="m6daittia"/><path clip-rule="evenodd" class="n0h4l1b9d"/></g>`,
		"fallback": "healthicons:rdt-result-no-test",
	});
}

export default Component;
