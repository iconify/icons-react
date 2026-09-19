import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/t77y8m80t.css';
import '../../css/i/ize1_abdx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="t77y8m80t"/><path class="ize1_abdx"/></g>`,
		"fallback": "catppuccin:vital",
	});
}

export default Component;
