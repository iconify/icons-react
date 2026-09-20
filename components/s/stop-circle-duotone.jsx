import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-d4_abqi.css';
import '../../css/e/emmo9vb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o-d4_abqi"/><path class="emmo9vb0v"/></g>`,
		"fallback": "reicon:stop-circle-duotone",
	});
}

export default Component;
