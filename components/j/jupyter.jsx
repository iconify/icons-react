import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gg61o3b0u.css';
import '../../css/o/onghtjj2z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="gg61o3b0u"/><path class="onghtjj2z"/></g>`,
		"fallback": "catppuccin:jupyter",
	});
}

export default Component;
