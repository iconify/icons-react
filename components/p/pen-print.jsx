import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mwn3f8bfu.css';
import '../../css/w/w1btr7zag.css';
import '../../css/d/dcq-5rbfv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mwn3f8bfu"/><path clip-rule="evenodd" class="w1btr7zag"/><path class="dcq-5rbfv"/></g>`,
		"fallback": "pepicons:pen-print",
	});
}

export default Component;
