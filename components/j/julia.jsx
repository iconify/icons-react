import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w_6x2gb8n.css';
import '../../css/l/laf36ebwr.css';
import '../../css/j/jo097xb2e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="w_6x2gb8n"/><path class="laf36ebwr"/><path class="jo097xb2e"/></g>`,
		"fallback": "catppuccin:julia",
	});
}

export default Component;
