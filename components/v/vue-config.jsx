import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/clp1aac9s.css';
import '../../css/f/fy9l2gb5c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="clp1aac9s"/><path class="fy9l2gb5c"/></g>`,
		"fallback": "catppuccin:vue-config",
	});
}

export default Component;
