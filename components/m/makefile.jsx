import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uy00pjvok.css';
import '../../css/v/vb2u8wvcg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="uy00pjvok"/><path class="vb2u8wvcg"/></g>`,
		"fallback": "catppuccin:makefile",
	});
}

export default Component;
