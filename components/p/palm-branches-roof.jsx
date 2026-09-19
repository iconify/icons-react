import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qjvxjmbwg.css';
import '../../css/x/x6w9hggfg.css';
import '../../css/x/x367sephh.css';
import '../../css/o/oolgf6c-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qjvxjmbwg"/><path clip-rule="evenodd" class="x6w9hggfg"/><path class="x367sephh"/><path class="oolgf6c-d"/></g>`,
		"fallback": "healthicons:palm-branches-roof",
	});
}

export default Component;
