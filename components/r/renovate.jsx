import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/emcw7sa2k.css';
import '../../css/q/q2k45vxkm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="emcw7sa2k"/><path class="q2k45vxkm"/></g>`,
		"fallback": "catppuccin:renovate",
	});
}

export default Component;
