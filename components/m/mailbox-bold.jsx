import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ootwnmxuy.css';
import '../../css/e/eyn1tubqg.css';
import '../../css/g/g68tbfbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ootwnmxuy"/><path class="eyn1tubqg"/><path class="g68tbfbgg"/></g>`,
		"fallback": "solar:mailbox-bold",
	});
}

export default Component;
