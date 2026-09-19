import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c3ht4cb9b.css';
import '../../css/b/b0_jwbcxu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="c3ht4cb9b"/><path class="b0_jwbcxu"/></g>`,
		"fallback": "catppuccin:lua",
	});
}

export default Component;
