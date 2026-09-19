import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wyu27vjiy.css';
import '../../css/v/vuxso30fq.css';
import '../../css/e/ew1gncc6n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wyu27vjiy"/><path class="vuxso30fq"/><path class="ew1gncc6n"/></g>`,
		"fallback": "catppuccin:java-alt-2",
	});
}

export default Component;
