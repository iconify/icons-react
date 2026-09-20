import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d1atvth_n.css';
import '../../css/o/o986qobmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d1atvth_n"/><path class="o986qobmf"/></g>`,
		"fallback": "keyline-icons:temperature-empty-sharp-duotone",
	});
}

export default Component;
