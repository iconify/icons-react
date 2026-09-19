import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-34_9fai.css';
import '../../css/k/k-xgrzblp.css';
import '../../css/e/edhjo_-9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s-34_9fai"/><path clip-rule="evenodd" class="k-xgrzblp"/><path class="edhjo_-9m"/></g>`,
		"fallback": "healthicons:pregnant-0812w2x-outline",
	});
}

export default Component;
