import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/peryhoawc.css';
import '../../css/v/v7fs5fzgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="peryhoawc"/><path class="v7fs5fzgi"/></g>`,
		"fallback": "keyline-icons:square-arrow-u-turn-right-sharp-duotone",
	});
}

export default Component;
