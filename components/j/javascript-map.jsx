import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wrewpfm7g.css';
import '../../css/k/kbhnc06ui.css';
import '../../css/r/rca7zubsm.css';
import '../../css/c/cc-2wv7mn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wrewpfm7g"/><path class="kbhnc06ui"/><path class="rca7zubsm"/><path class="cc-2wv7mn"/></g>`,
		"fallback": "catppuccin:javascript-map",
	});
}

export default Component;
