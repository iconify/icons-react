import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/j7h-vbcez.css';
import '../../css/v/vmbun3c0k.css';
import '../../css/c/clp1aac9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="j7h-vbcez"/><path class="vmbun3c0k"/><path class="clp1aac9s"/></g>`,
		"fallback": "catppuccin:javascript-config",
	});
}

export default Component;
