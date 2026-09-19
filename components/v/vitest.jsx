import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vusi-j1ph.css';
import '../../css/o/oizrubanj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vusi-j1ph"/><path class="oizrubanj"/></g>`,
		"fallback": "catppuccin:vitest",
	});
}

export default Component;
