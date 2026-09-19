import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/thqapzbds.css';
import '../../css/w/w287tyz3k.css';
import '../../css/s/s8u9adbxv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="thqapzbds"/><path class="w287tyz3k"/><path class="s8u9adbxv"/></g>`,
		"fallback": "catppuccin:premake",
	});
}

export default Component;
