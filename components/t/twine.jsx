import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jdez2hb1n.css';
import '../../css/s/sh1lptb3y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="jdez2hb1n"/><path class="sh1lptb3y"/></g>`,
		"fallback": "catppuccin:twine",
	});
}

export default Component;
