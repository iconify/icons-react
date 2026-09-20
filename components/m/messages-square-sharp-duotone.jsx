import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vv5gchm0k.css';
import '../../css/j/jg_dgbbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vv5gchm0k"/><path class="jg_dgbbmg"/></g>`,
		"fallback": "keyline-icons:messages-square-sharp-duotone",
	});
}

export default Component;
