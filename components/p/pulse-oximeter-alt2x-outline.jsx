import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k22u013fs.css';
import '../../css/t/t-_-0-bda.css';
import '../../css/f/fqe8gmnza.css';
import '../../css/q/q0dvfvbzt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k22u013fs"/><path clip-rule="evenodd" class="t-_-0-bda"/><path class="fqe8gmnza"/><path clip-rule="evenodd" class="q0dvfvbzt"/></g>`,
		"fallback": "healthicons:pulse-oximeter-alt2x-outline",
	});
}

export default Component;
