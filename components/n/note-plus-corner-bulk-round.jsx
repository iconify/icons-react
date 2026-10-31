import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n4hg83b2o.css';
import '../../css/j/jg7evudql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n4hg83b2o"/><path class="jg7evudql"/></g>`,
		"fallback": "coolicons:note-plus-corner-bulk-round",
	});
}

export default Component;
