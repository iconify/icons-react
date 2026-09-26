import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lnqskmbte.css';
import '../../css/i/igkrdcbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lnqskmbte"/><path class="igkrdcbnb"/></g>`,
		"fallback": "solar:panel-left-close-bold",
	});
}

export default Component;
