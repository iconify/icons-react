import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wi-78m4mi.css';
import '../../css/k/kkyppl-5m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wi-78m4mi"/><path class="kkyppl-5m"/></g>`,
		"fallback": "catppuccin:matlab",
	});
}

export default Component;
