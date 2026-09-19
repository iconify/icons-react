import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qjr1vkifv.css';
import '../../css/c/c5l9o1tad.css';
import '../../css/t/tk5wq2sfl.css';
import '../../css/j/jzakqabcy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qjr1vkifv"/><path clip-rule="evenodd" class="c5l9o1tad"/><path class="tk5wq2sfl"/><path clip-rule="evenodd" class="jzakqabcy"/></g>`,
		"fallback": "healthicons:low-income-level-outline",
	});
}

export default Component;
