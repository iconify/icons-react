import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bs7fszbpp.css';
import '../../css/h/hf_3n7brb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bs7fszbpp"/><path class="hf_3n7brb"/></g>`,
		"fallback": "coolicons:replace-bulk-round",
	});
}

export default Component;
