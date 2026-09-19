import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/glmqoxo2g.css';
import '../../css/t/tgi27dstf.css';
import '../../css/b/bs4c_4bsg.css';
import '../../css/q/q8p-vyb-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="glmqoxo2g"/><path class="tgi27dstf"/><path clip-rule="evenodd" class="bs4c_4bsg"/><path class="q8p-vyb-d"/></g>`,
		"fallback": "healthicons:loss-smell",
	});
}

export default Component;
