import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/z2r1xnbjr.css';
import '../../css/l/lia2tlbhq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="z2r1xnbjr"/><path class="lia2tlbhq"/></g>`,
		"fallback": "catppuccin:racket",
	});
}

export default Component;
