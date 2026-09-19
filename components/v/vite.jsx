import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mz47f051w.css';
import '../../css/s/s6-g32e5v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="mz47f051w"/><path class="s6-g32e5v"/></g>`,
		"fallback": "catppuccin:vite",
	});
}

export default Component;
