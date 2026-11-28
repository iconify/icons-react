import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nrxx0tbiq.css';
import '../../css/x/xlzhwo5tl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nrxx0tbiq secondary"/><path class="primary xlzhwo5tl"/></g>`,
		"fallback": "iconaut:surfboard-duotone",
	});
}

export default Component;
