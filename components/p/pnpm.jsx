import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/chico6sfv.css';
import '../../css/w/wuh5h2bwt.css';
import '../../css/s/stgp-sogn.css';
import '../../css/p/pa9ny6bge.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="chico6sfv"/><path class="wuh5h2bwt"/><path class="stgp-sogn"/><path class="pa9ny6bge"/></g>`,
		"fallback": "catppuccin:pnpm",
	});
}

export default Component;
